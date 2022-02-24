
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
      "configParams_" + cacheHelper.getObjectHash({'params': configParams, 'fields': requestedFieldsArray})
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
  
  this._processData = function (configParams, requestedFields) {
    const url = utils.getUrl(configParams);
    let cubeResponse = cacheHelper.fetchJsonUrl(url);
    
    var a = requestedFields.asArray();
    const requestedFieldsArray = requestedFields.asArray().map(i => i.getId());
    
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
    
    for (let i = 0; i < observations.length; i++) {
      let hash = {};
      
      const currentObservation = observations[i];
      
      if (!measureColumns) {
        hash['OBSERVATION'] = currentObservation;
      }
      
      let remaining = i;
      let subtotal = total;
      
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
          hash["Fecha"] = recodeDatesHelper.converDate(dimensionKeyBy.code);
        }
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
      
      tableData.push({values: requestedFieldsArray.map(i => (hash[i] === null || typeof hash[i] !== 'undefined') ? hash[i] : '') });
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

