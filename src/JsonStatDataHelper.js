
function JsonStatDataHelper(services) {
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
    const cubeResponse = cacheHelper.fetchJsonUrl(url);
    
    //var a = requestedFields.asArray();
    const requestedFieldsArray = requestedFields.asArray().map(i => this._fixFieldId(i.getId()));
    
    const dimensions = utils.getJsonStatDimensions(cubeResponse);
    
    let measureColumns = null;
    if(configParams.showMeasureColumns) {
      measureColumns = utils.getJsonStatMeasureColumns(cubeResponse);
    }

    let tableData = [];
    const observations = cubeResponse.value;
    const keys = Object.keys(dimensions);

    const cubeResponseDataDimensions = cubeResponse.dimension;
    const cubeResponseDataDimensionKeys = cubeResponse.id || Object.keys(cubeResponse.dimension);

    const size = cubeResponse.size || cubeResponse.dimension.size;
    
    let total = 1;
    for (let i = 0; i < size.length; i++) {
      total *= size[i];
    }

    // TODO: date recoding
    const hasDates = false;

    let observationsLength = 0;
    if(!Array.isArray(observations)) {
      observationsLength = Math.max(...Object.keys(observations).map(k => {
        try {
          return parseInt(k);
        } catch(e) {
          return null;
        }
      }));
    } else {
      observationsLength = observations.length;
    }
    
    for (let i = 0; i < observationsLength; i++) {
      const observationKey = Array.isArray(observations) ? i : (""+i);
      const currentObservation = observations[observationKey];

      if(typeof(currentObservation) === "undefined") {
        continue;
      }

      
      let hash = {};


      if (!measureColumns) {
        hash['OBSERVATION'] = currentObservation;
      }
      
      let remaining = i;
      let subtotal = total;
      
      for (let j = 0; j < size.length; j++) {
        const totalDimension = size[j];
        
        subtotal = Math.floor(subtotal / totalDimension);
        const indDimension = Math.floor(remaining / subtotal);
        
        remaining = remaining % subtotal;
        
        const dimensionKeyName = cubeResponseDataDimensionKeys[j];
        const dimensionKeyBy = cubeResponseDataDimensions[dimensionKeyName] && cubeResponseDataDimensions[dimensionKeyName].category ?
          cubeResponseDataDimensions[dimensionKeyName].category : null;

        if(!dimensionKeyBy) {
          hash[dimensionKeyName] = '';
          continue;
        }

        let dimensionKeyByCode = null;

        if(!dimensionKeyBy.index) {
          dimensionKeyByCode = Object.keys(dimensionKeyBy.label)[indDimension];
        } else {
          if(Array.isArray(dimensionKeyBy.index)) {
            dimensionKeyByCode = dimensionKeyBy.index[indDimension];
          } else {
            dimensionKeyByCode = Object.keys(dimensionKeyBy.index)[indDimension];
          }
        }

        if(typeof(dimensionKeyByCode) === 'undefined' || dimensionKeyByCode === null) {
          hash[dimensionKeyName] = '';
          continue;
        }

        const dimensionKeyByLabel = dimensionKeyBy.label && dimensionKeyBy.label[dimensionKeyByCode] ?
          dimensionKeyBy.label[dimensionKeyByCode] : dimensionKeyByCode;
        
        if (measureColumns) {
          if (measureColumns.dimension == dimensionKeyName) {
            hash[dimensionKeyName + "_" + dimensionKeyByCode] = currentObservation;
          } else {
            hash[dimensionKeyName] = dimensionKeyByLabel;
          }
        } else {
          hash[dimensionKeyName] = dimensionKeyByLabel;
        }
      }
      
      tableData.push({values: requestedFieldsArray.map(dim => (hash[dim] === null || typeof hash[dim] !== 'undefined') ? hash[dim] : '') });
    }
    
    return tableData;
    
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
    exports["__esModule"] = true;
    exports["default"] = JsonStatDataHelper;
}

