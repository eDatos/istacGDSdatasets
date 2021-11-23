
function JsonStatSchemaHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;

  /**
   * Function that generates the correct Schema minding the given configParams.
   * @param {object} configParams The configParams of the request.
   * @return {list} The list with the Schema.
   */
  this.getColumns = function (configParams) {
    if (configParams.inputType == "inputUrlJsonStatSelector") {
      this._checkInputURL(configParams);
    }
    const url = utils.getUrl(configParams);
    const code = cacheHelper.getHash("schema_data_" + cacheHelper.getObjectHash(configParams));
    let mainCols = cacheHelper.get(code);
    if (!mainCols) {
      mainCols = this._processColumns(url, configParams);
      cacheHelper.put(code, mainCols);
    }
  
    return mainCols;
  }
  
  
  this._processColumns = function (url, configParams) {
    const cubeResponse = cacheHelper.fetchJsonUrl(url);
    
    const dimensions = utils.getJsonStatDimensions(cubeResponse);
    const keys = Object.keys(dimensions);
    
    let measureColumns = null;
    if(configParams.showMeasureColumns) {
      measureColumns = utils.getJsonStatMeasureColumns(cubeResponse);
    }
    
    let result = [];
    
    if(!measureColumns) {
      measureColumns = utils.getJsonStatMeasureColumns(cubeResponse);
      result.push({
        id: 'OBSERVATION',
        name: 'valor',
        columnRole: "metric",
        dataType: "float"
      });
    } else {
      for(let measureColumnValue of measureColumns.values) {
        result.push({
          id: measureColumns.dimension + '_' + measureColumnValue.id,
          name: measureColumnValue.label,
          columnRole: "metric",
          dataType: "float"
        });
      }
    }

    for(let dimensionId of keys) {
      const dimensionLabel = dimensions[dimensionId].label;
      if(measureColumns && measureColumns.dimension == dimensionId) {
        continue;
      }
      result.push({
        id: dimensionId,
        name: dimensionLabel,
        columnRole: "dimension",
        dataType: "string"
      });
    }
    
    return result;
  }
  
  this._checkInputURL = function (configParams) {
    let error = undefined;

    if (!configParams.inputUrl) {
      error = "URL field must not be empty";
    }

    if (error) {
      DataStudioApp.createCommunityConnector()
        .newUserError()
        .setDebugText("Error with inputUrl: " + error)
        .setText(
          "Por favor, asegúrese de que el campo URL no está vacío y que el recurso cumple la estructura en formato JSON-STAT"
        )
        .throwException();
    }
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = JsonStatSchemaHelper;
}

