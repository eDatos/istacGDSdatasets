// http://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&uuidConsulta=f0ef18a3-e36b-4910-8b04-ef61640ac1e4

function LegacySchemaHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.LegacyUtils;
  
  /**
   * Function that generates the correct Schema minding the given configParams.
   * @param {object} configParams The configParams of the request.
   * @return {list} The list with the Schema.
   */
  this.getColumns = function(configParams) {
    if (configParams.inputType == "inputUrlSelector" || configParams.inputType == "inputUrlLegacySelector") {
      this._checkInputURL(configParams);
    }
  
    const url = utils.getUrl(configParams);
    const code = cacheHelper.getHash("schema_data_" + cacheHelper.getObjectHash(configParams));
    let mainCols = cacheHelper.get(code);
    if(!mainCols) {
      mainCols = this._processColumns(url, configParams);
      cacheHelper.put(code, mainCols);
    }
    
    return mainCols;
  };
  
  
  this._processColumns = function(url, configParams) {
  
    const indicatorsResponse = cacheHelper.fetchJsonUrl(url);
    
    const temporals = (indicatorsResponse.temporals && indicatorsResponse.temporals.map(i => utils.normalize(i))) || [];
    const spatials = (indicatorsResponse.spatials && indicatorsResponse.spatials.map(i => utils.normalize(i))) || [];
    
    const categories = indicatorsResponse.categories;
    const variables = categories.map(i => utils.normalize(i.variable));
    
    let variableCodes = {};
    let variableLabels = {};
    
    for(let category of categories) {
      const id = utils.normalize(category.variable);
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
    
    let timeCols = [];
    let spatialCols = [];
    let labelCols = [];
    let metricCols = [];
    
    for(let k of Object.keys(variableCodes)) {
      if(temporals.indexOf(k) !== -1) {
        if(configParams.showGranularity) {
          timeCols.push({id: 'Granularidad_' + k, name: 'Granularidad ' + variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        }
        if(configParams.recodeDates) {
          // Get a data row and get date field granularity
          // const row = indicatorsResponse.data[0];
          // let granularity = null;
          // if(row) {
          //   granularity = utils.getDateGranularity(row.dimCodes[variables.indexOf(k)]);
          // }
          // if(granularity === null) {
          //   timeCols.push({id: 'Fecha_' + k, name: 'Fecha ' + variableLabels[k], columnRole: 'dimension', dataType: 'date'});
          // } else {
          //   timeCols.push({id: 'Fecha_' + k, name: 'Fecha ' + variableLabels[k], columnRole: 'dimension', dataType: 'date_' + granularity});
          // }
          timeCols.push({id: 'Fecha_' + k, name: 'Fecha ' + variableLabels[k], columnRole: 'dimension', dataType: 'date'});
        }
        timeCols.push({id: k, name: variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        if(configParams.showLabels) {
          timeCols.push({id: 'Etiqueta_' + k, name: 'Etiqueta ' + variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        }
      }
      else if(spatials.indexOf(k) !== -1) {
        spatialCols.push({id: k, name: variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        if(configParams.showGranularity) {
          spatialCols.push({id: 'Granularidad_' + k, name: 'Granularidad ' + variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        }
        if(configParams.showLabels) {
          spatialCols.push({id: 'Etiqueta_' + k, name: 'Etiqueta ' + variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        }
      } else {
        labelCols.push({id: k, name: variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        if(configParams.showLabels) {
          labelCols.push({id: 'Etiqueta_' + k, name: 'Etiqueta ' + variableLabels[k], columnRole: 'dimension', dataType: 'string'});
        }
      }
    }
    
    metricCols.push({id: 'Valor', name: 'Valor', columnRole: 'metric', dataType: 'float'});
    
    let mainCols = [];
    
    for(let column of (timeCols.concat(spatialCols).concat(labelCols).concat(metricCols))) {
      mainCols.push(column);
    }
    
    console.log(mainCols);
    
    return mainCols;
  }
  
  this._checkInputURL = function(configParams) {
    let error = undefined;
    if(!configParams.inputUrl) {
      error = "URL field must not be empty";
    } else if (
      (configParams.inputUrl.indexOf("http://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&") !== 0) &&
      (configParams.inputUrl.indexOf("https://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&") !== 0)
    ) {
      error = "URL field entered is not correct for this connector";
    }
    if(error) {
      const message =
        "Por favor, asegúrese de que el campo URL no está vacío y que la URL tiene el siguiente formato: " +
        "https://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&xxxxxx";
      utils.throwConectorError(error, message);
    }
  }

}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = LegacySchemaHelper;
}

