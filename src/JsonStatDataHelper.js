
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
    
    const dimensions = utils.getJsonStatDimensions(cubeResponse);
    
    let measureColumns = null;
    if(configParams.showMeasureColumns) {
      measureColumns = utils.getJsonStatMeasureColumns(cubeResponse);
    }

    let tableData = [];
    const observations = cubeResponse.value;
    const keys = Object.keys(dimensions);

    const cubeResponseDataDimensions = cubeResponse.dimension;
    const cubeResponseDataDimensionKeys = cubeResponse.id;

    const size = cubeResponse.size || cubeResponse.dimension.size;
    
    let total = 1;
    for (let i = 0; i < size.length; i++) {
      total *= size[i];
    }

    // TODO: date recoding
    const hasDates = false;
    
    for (let i = 0; i < observations.length; i++) {
      let hash = {};
      
      const currentObservation = observations[i];
      
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
      
      tableData.push({values: requestedFieldsArray.map(i => (hash[i] === null || typeof hash[i] !== 'undefined') ? hash[i] : '') });
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

