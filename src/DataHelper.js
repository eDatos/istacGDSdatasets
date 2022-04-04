
function DataHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;
  const recodeDatesHelper = services.RecodeDatesHelper;

  /* istanbul ignore next */
  /**
   * Function that gets and process all the data from the ISTAC API minding the given configParams and requested fields
   * @param {object} configParams The configParams of the request.
   * @param {object} requestedFields The requested Fields to get the data from.
   * @return {list} The list with the rows of data.
   */
  this.getRows = function (configParams, requestedFields) {
    const requestedFieldsArray = requestedFields.asArray().map(i => i.getId());
    const cachedCode = cacheHelper.getHash(
      "configParams_" + cacheHelper.getObjectHash({'url': utils.getUrl(configParams), 'params': configParams, 'fields': requestedFieldsArray})
    );
    let processedRows = cacheHelper.get(cachedCode);
    if (!processedRows) {
      processedRows = this._processData(configParams, requestedFields);
      // ~ 2MB (65000 fields * 32 bytes)
      if (processedRows.length * requestedFieldsArray.length < 65000) {
        cacheHelper.put(cachedCode, processedRows);
      }
    }
    return processedRows;
  }

  this._fixFieldId = function(fieldId) {
    //return fieldId;
    const idsTranslator = [
      "_date_YEAR", "_date_YEAR_MONTH",
      "_date_YEAR_QUARTER", "_date_YEAR_MONTH_DAY",
      "_date_YEAR_WEEK"
    ];
    for(let idSuffix of idsTranslator) {
      if(fieldId.endsWith(idSuffix)) {
        return fieldId.substring(0, fieldId.length - idSuffix.length);
      }
    }
    return fieldId;
  }
  
  this._processData = function (configParams, requestedFields) {
    const url = utils.getUrl(configParams);
    let cubeResponse = cacheHelper.fetchJsonUrl(url);
    
    //var a = requestedFields.asArray();
    const requestedFieldsArray = requestedFields.asArray().map(i => this._fixFieldId(i.getId()));
    
    const dimensions = utils.getDimensions(cubeResponse);
    
    let measureColumns = null;
    if(configParams.showMeasureColumns) {
      measureColumns = utils.getMeasureColumns(cubeResponse);
    }
    
    const timeDimension = utils.getTimeDimensions(cubeResponse);
    
    const languages = cubeResponse.selectedLanguages.language;
    let tableData = [];
    const observations = cubeResponse.data.observations.split(" | ");
    const keys = Object.keys(dimensions);
    
    const cubeResponseDataDimensions = cubeResponse.data.dimensions;
    
    let total = 1;
    for (let i = 0; i < keys.length; i++) {
      total *= cubeResponseDataDimensions.dimension[i].representations.total;
    }
    
    const dimensionKeysByCacheHash = cacheHelper.getHash("dimensionKeysBy_" + JSON.stringify(url));
    let dimensionKeysBy = cacheHelper.get(dimensionKeysByCacheHash);
    if(!dimensionKeysBy) {
      dimensionKeysBy = [];
      for (let j = 0; j < cubeResponseDataDimensions.total; j++) {
        dimensionKeysBy[j] = utils.keyBy(cubeResponseDataDimensions.dimension[j].representations.representation, "index");
      }
      cacheHelper.put(dimensionKeysByCacheHash, dimensionKeysBy);
    }
    
    const dimensionMetadataKeysByValuesCacheHash = cacheHelper.getHash("dimensionMetadataKeysByValues_" + JSON.stringify(url));
    let dimensionMetadataKeysByValues = cacheHelper.get(dimensionMetadataKeysByValuesCacheHash);
    if(!dimensionMetadataKeysByValues) {
      dimensionMetadataKeysByValues = {};
      const dimensionMetadataKeysBy = utils.keyBy(cubeResponse.metadata.dimensions.dimension, "id");
      for (let d = 0; d < keys.length; d++) {
        const dimensionsKeysDId = dimensions[keys[d]].id;
        dimensionMetadataKeysByValues[dimensionsKeysDId] = utils.keyBy(dimensionMetadataKeysBy[dimensionsKeysDId].dimensionValues.value, "id");
      }
      cacheHelper.put(dimensionMetadataKeysByValuesCacheHash, dimensionMetadataKeysByValues);
    }
    
    
    const dimensionMetadataKeysByValueLangsCacheHash = cacheHelper.getHash("dimensionMetadataKeysByValueLangs_" + JSON.stringify(url));
    let dimensionMetadataKeysByValueLangs = cacheHelper.get(dimensionMetadataKeysByValueLangsCacheHash);
    let dimensionMetadataKeysByValueLangsCached;
    if(!dimensionMetadataKeysByValueLangs) {
      dimensionMetadataKeysByValueLangsCached = false;
      dimensionMetadataKeysByValueLangs = {};
    } else {
      dimensionMetadataKeysByValueLangsCached = true;
    }
    
    const hasDates = configParams.recodeDates && requestedFieldsArray.indexOf('Fecha') != -1;
    let minimumGranularity = '';

    if(hasDates) {
      // Get a data row and get date field granularity

      const granularityCodes = {
        'A': 'YEARLY',
        'M': 'MONTHLY',
        'Q': 'QUARTERLY',
        'D': 'DAILY',
        'W': 'WEEKLY',
        'S': 'BIYEARLY'
      };

      const granularityOrder = {
        'YEARLY': 1,
        'BIYEARLY': 2,
        'QUARTERLY': 3,
        'MONTHLY': 4,
        'WEEKLY': 5,
        'DAILY': 6
      };

      const granularitySet = new Set();

      let minimumGranularityIndex = 0;

      const metadata = cubeResponse.metadata.temporalGranularities;
      if(metadata) {
        for(let granularityResource of metadata.resource) {
          if(granularityCodes[granularityResource.id]) {
            granularitySet.add(granularityCodes[granularityResource.id]);
          }
        }
      } else {
        for(let row of cubeResponse.metadata.dimensions.dimension) {
          if(row.type == "TIME_DIMENSION") {
            for(let dimensionValue of row.dimensionValues.value) {
              granularitySet.add(dimensionValue.temporalGranularity);
            }
            break;
          }
        }
      }

      // TODO: comprobar valores posibles
      for(let temporalGranularity of granularitySet) {
        if(granularityOrder[temporalGranularity] && granularityOrder[temporalGranularity] > minimumGranularityIndex) {
          minimumGranularityIndex = granularityOrder[temporalGranularity];
          minimumGranularity = temporalGranularity;
        }
      }
    }

    for (let i = 0; i < observations.length; i++) {
      let hash = {};
      
      const currentObservation = observations[i];
      
      if (!measureColumns) {
        hash['OBSERVATION'] = currentObservation;
      }
      
      let remaining = i;
      let subtotal = total;

      let skipRow = false;
      
      for (let j = 0; j < cubeResponseDataDimensions.total; j++) {
        const totalDimension = cubeResponseDataDimensions.dimension[j].representations.total;
        
        subtotal = Math.floor(subtotal / totalDimension);
        const indDimension = Math.floor(remaining / subtotal);
        
        remaining = remaining % subtotal;
        
        const dimensionKeyBy = dimensionKeysBy[j][indDimension];
        
        if (measureColumns) {
          if (measureColumns.dimension == dimensions[j].id) {
            hash[measureColumns.dimension + "_" + dimensionKeyBy.code] = currentObservation;
          } else {
            hash[dimensions[j].id] = dimensionKeyBy.code;
          }
        } else {
          hash[dimensions[j].id] = dimensionKeyBy.code;
        }
        
        if (hasDates && timeDimension == dimensions[j].id) {
          const calculatedGranularity = recodeDatesHelper.calculateDateGranularity(dimensionKeyBy.code);
          if(minimumGranularity == 'DAILY' && calculatedGranularity == '' ||
            minimumGranularity == '' && calculatedGranularity == 'DAILY' ||
            minimumGranularity == calculatedGranularity) {
              hash["Fecha"] = recodeDatesHelper.converDate(dimensionKeyBy.code);
          } else {
            skipRow = true;
            break;
          }
        }
      }

      if(skipRow) {
        continue;
      }
      
      if (configParams.showLabels) {
        for (let dimensionKey of keys) {
          const dimensionId = dimensions[dimensionKey].id;
          const hashDimensionsId = hash[dimensionId];
          
          if(!dimensionMetadataKeysByValueLangs[dimensionId]) {
            dimensionMetadataKeysByValueLangs[dimensionId] = {};
          }
          
          let dimensionLabel = null;
          
          if(dimensionMetadataKeysByValueLangs[dimensionId][hashDimensionsId]) {
            dimensionLabel = dimensionMetadataKeysByValueLangs[dimensionId][hashDimensionsId];
          } else {
            const dimensionValue = dimensionMetadataKeysByValues[dimensionId][hashDimensionsId];
            if(dimensionValue) {
              dimensionLabel = utils.keyBy(dimensionValue.name.text, "lang");
              dimensionMetadataKeysByValueLangs[dimensionId][hashDimensionsId] = dimensionLabel;
            }
          }
          
          if (dimensionLabel) {
            if (configParams.allLanguages) {
              for (let language of languages) {
                if (dimensionLabel[language]) {
                  hash["Etiqueta_" + dimensionId + "_" + language] = dimensionLabel[language].value;
                }
              }
            } else {
              hash["Etiqueta_" + dimensionId] = dimensionLabel.es.value;
            }
          }
        }
      }
      
      tableData.push({values: requestedFieldsArray.map(dim => (hash[dim] === null || typeof hash[dim] !== 'undefined') ? hash[dim] : '') });
    }
    
    if(configParams.showLabels && !dimensionMetadataKeysByValueLangsCached) {
      cacheHelper.put(dimensionMetadataKeysByValueLangsCacheHash, dimensionMetadataKeysByValueLangs);
    }
    
    return tableData;
    
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
    exports["__esModule"] = true;
    exports["default"] = DataHelper;
}

