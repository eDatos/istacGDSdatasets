
function SchemaHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;

  /**
   * Function that generates the correct Schema minding the given configParams.
   * @param {object} configParams The configParams of the request.
   * @return {list} The list with the Schema.
   */
  this.getColumns = function (configParams) {
    if (configParams.inputType == "inputUrlSelector") {
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
    
    const dimensions = utils.getDimensions(cubeResponse);
    const keys = Object.keys(dimensions);
    // const cubeResponseDataDimensions = cubeResponse.data.dimensions;
    
    let measureColumns = null;
    if(configParams.showMeasureColumns) {
      measureColumns = utils.getMeasureColumns(cubeResponse);
    }
    
    // const timeDimension = utils.getTimeDimensions(cubeResponse);
    const languages = cubeResponse.selectedLanguages.language;
    
    let result = [];
    
    if(!measureColumns) {
      result.push({
        id: 'OBSERVATION',
        name: utils.keyBy(cubeResponse.name.text, 'lang').es.value,
        columnRole: "metric",
        dataType: "float"
      });
    } else {
      for(let measureColumnValue of measureColumns.values) {
        result.push({
          id: measureColumns.dimension + '_' + measureColumnValue.id,
          name: measureColumns.dimension + '_' + measureColumnValue.id,
          columnRole: "metric",
          dataType: "float"
        });
      }
    }
    
    // let dimensionIds = [];
    // let dimensionKeysBy = [];
    
    for(let key of keys) {
      const dimensionId = dimensions[key].id;
      const dimensionLabel = dimensions[key].label;
      if(measureColumns && measureColumns.dimension == dimensionId) {
        continue;
      }
      result.push({
        id: dimensionId,
        name: dimensionLabel,
        columnRole: "dimension",
        dataType: "string"
      });
      if(configParams.showLabels) {
        if(!configParams.allLanguages) {
          result.push({
            id: "Etiqueta_" + dimensionId,
            name: "Etiqueta_" + dimensionLabel,
            columnRole: "dimension",
            dataType: "string"
          });
        } else {
          for(let language of languages) {
            result.push({
              id: "Etiqueta_" + dimensionId + '_' + language,
              name: "Etiqueta_" + dimensionLabel + '_' + language,
              columnRole: "dimension",
              dataType: "string"
            });
          }
        }
      }
    }
    
    if(configParams.recodeDates) {
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

      let dateCol = {
        id: "Fecha",
        name: "Fecha",
        columnRole: "dimension",
        dataType: "date"
      };

      // const granularitySet = new Set();

      // let minimumGranularityIndex = 0;
      // let minimumGranularity = '';

      // const metadata = cubeResponse.metadata.temporalGranularities;
      // if(metadata) {
      //   for(let granularityResource of metadata.resource) {
      //     if(granularityCodes[granularityResource.id]) {
      //       granularitySet.add(granularityCodes[granularityResource.id]);
      //     }
      //   }
      // } else {
      //   for(let row of cubeResponse.metadata.dimensions.dimension) {
      //     if(row.type == "TIME_DIMENSION") {
      //       for(let dimensionValue of row.dimensionValues.value) {
      //         granularitySet.add(dimensionValue.temporalGranularity);
      //       }
      //       break;
      //     }
      //   }
      // }

      // // TODO: comprobar valores posibles
      // for(let temporalGranularity of granularitySet) {
      //   if(granularityOrder[temporalGranularity] && granularityOrder[temporalGranularity] > minimumGranularityIndex) {
      //     minimumGranularityIndex = granularityOrder[temporalGranularity];
      //     minimumGranularity = temporalGranularity;
      //   }
      // }

      // if(minimumGranularityIndex == 0 || minimumGranularity == '') {
      //   dateCol.dataType = "date";
      // } else {
      //   dateCol.dataType = "date_" + minimumGranularity;
      // }

      result.push(dateCol);
      result.push({
        id: "Granularidad_Fecha",
        name: "Granularidad Fecha",
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
    } else if (configParams.inputUrl.indexOf("https://datos.canarias.es/api/estadisticas/statistical-resources/v1.0/datasets/ISTAC/") == 0){
      return;
    } else if (configParams.inputUrl.indexOf("https://datos.canarias.es/api/estadisticas/statistical-resources/v1.0/queries/ISTAC/") == 0){
      return;
    }
    error = "URL field entered is not correct for this connector";
    if (error) {
      DataStudioApp.createCommunityConnector()
        .newUserError()
        .setDebugText("Error with inputUrl: " + error)
        .setText(
          "Por favor, asegúrese de que el campo URL no está vacío y que la URL tiene el siguiente formato: \n" +
          "https://datos.canarias.es/api/estadisticas/statistical-resources/v1.0/datasets/ISTAC/" +
          "CODIGO_DEL_CUBO\n" +
          "https://datos.canarias.es/api/estadisticas/statistical-resources/v1.0/queries/ISTAC/" +
          "CODIGO_DE_CONSULTA\n"
        )
        .throwException();
    }
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = SchemaHelper;
}

