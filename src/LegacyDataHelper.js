function LegacyDataHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.LegacyUtils;
    
  /* istanbul ignore next */
  /**
   * Function that gets and process all the data from the ISTAC API minding the given configParams and requested fields
   * @param {object} configParams The configParams of the request.
   * @param {object} requestedFields The requested Fields to get the data from.
   * @return {list} The list with the rows of data.
   */
  this.getRows = function(configParams, requestedFields) {
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
  
  this._processData = function(configParams, requestedFields) {
    const requestedFieldsArray = requestedFields.asArray().map(i => this._fixFieldId(i.getId()));
  
    const url = utils.getUrl(configParams);
    const indicatorsResponse = cacheHelper.fetchJsonUrl(url);
    
    const categories = indicatorsResponse.categories;
    const variables = categories.map(i => utils.normalize(i.variable));
    const temporals = (indicatorsResponse.temporals && indicatorsResponse.temporals.map(i => utils.normalize(i))) || [];
    const spatials = (indicatorsResponse.spatials && indicatorsResponse.spatials.map(i => utils.normalize(i))) || [];
    
    let variableCodes = {};
    let variableLabels = {};
    
    for(let category of categories) {
      let id = utils.normalize(category.variable);
      variableLabels[id] = category.variable;
      if(!variableCodes[id]) {
        variableCodes[id] = {};
      }
      for(let i = 0; i < category.codes.length; i++) {
        const code = category.codes[i];
        const label = category.labels[i];
        variableCodes[id][code] = label;
      }
    }
    
    let tableData = [];
    let first = true;
    
    for(let row of indicatorsResponse.data) {
      let rowByDim = {};
      for(let i = 0; i < row.dimCodes.length; i++) {
        const variableId = variables[i];
        rowByDim[variableId] = row.dimCodes[i];
        rowByDim['Etiqueta_' + variableId] = variableCodes[variableId][row.dimCodes[i]] || row.dimCodes[i];
        if(temporals.indexOf(variableId) !== -1) {
          let granularity = utils.getDateGranularity(row.dimCodes[i]);
          rowByDim['Granularidad_' + variableId] = granularity;
          if(configParams.recodeDates) {
            rowByDim['Fecha_' + variableId] = utils.recodeDate(row.dimCodes[i], granularity);
          }
        }
        if(spatials.indexOf(variableId) !== -1) {
          rowByDim['Granularidad_' + variableId] = utils.getPlaceGranularity(row.dimCodes[i]);
        }
      }
      rowByDim['Valor'] = row.Valor;
      if(first) {
        console.log(rowByDim);
        first = false;
      }
      tableData.push({ values: requestedFieldsArray.map(dim => (rowByDim[dim] === null || typeof rowByDim[dim] !== 'undefined') ? rowByDim[dim] : '') });
    }
    
    return tableData;
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
    exports["__esModule"] = true;
    exports["default"] = LegacyDataHelper;
}

