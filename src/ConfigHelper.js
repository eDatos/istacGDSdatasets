
function ConfigHelper(services) {
  const cacheHelper = services.CacheHelper;
  const utils = services.Utils;
  
  const METADATA_ENDPOINT = "https://datos.canarias.es/api/estadisticas/cmetadata/v1.0/properties.json";
  const OPERATIONS_KEY = "metamac.statistical_operations.rest.external";
  const OPERATIONS_END_OF_ENDPOINT = "/v1.0/operations.json?query=STATUS%20EQ%20%22PRODUCTION%22&limit=1000&orderBy=ID%20ASC";
  const CUBES_KEY = "metamac.statistical_resources.rest.external";
  const CUBES_END_OF_ENDPOINT = "/v1.0/datasets.json?limit=1000&orderBy=ID%20ASC&query=STATISTICAL_OPERATION_URN%20EQ%20%22URN_OF_CUBE%22";

  const getEndpoint = function(key, addedString) {
    const parsedResponse = cacheHelper.fetchJsonUrl(METADATA_ENDPOINT);
    return utils.keyBy(parsedResponse.property, "key")[key].value + addedString;
  }
  
  const uniqueIds = function(array) {
    let setOfIds = {};
    for(let element of array) {
      if(typeof setOfIds[element.id] == "undefined") {
        setOfIds[element.id] = element;
      }
    }
    return Object.values(setOfIds);
  }
  
  const sortByTitle = function(array) {
    array = uniqueIds(array);
    return array.sort((a, b) => {
      const x = a.name.text[0].value;
      const y = b.name.text[0].value;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  
  /* istanbul ignore next */
  const chooseListToSort = function(response) {
    if (response.operation) {
      return response.operation;
    } else if (response.dataset) {
      return response.dataset;
    } else if (response.total == 0) {
      return [];
    } else {
      throw "Error: the response from the API wasn't one accepted by the connector";
    }
  }
  
  /* istanbul ignore next */
  const getEsName = function(object) {
    for (let text of object.text) {
      if (text.lang == "es") {
        return text.value;
      }
    }
  }
  
  const getAndProcessData = function(url) {
    const dataResponse = cacheHelper.fetchJsonUrl(url);
    let result = null;
    try {
      const dataToSort = chooseListToSort(dataResponse);
      result = sortByTitle(dataToSort);
    } catch (e) {
      console.log(
        "Error while getting and proccesing data from: ",
        url,
        "The Error is: ",
        e
      );
    }
    return result;
  }
  
  const getProcessAndCacheData = function(cachePrefix, url) {
    const cacheKey = cacheHelper.getHash(cachePrefix + "_" + url);
    let cached = cacheHelper.get(cacheKey);
    if(!cached) {
       cached = getAndProcessData(url);
       if(cached) {
         cacheHelper.put(cacheKey, cached);
       }
    }
    return cached;
  }

  /* istanbul ignore next */
  this.getConfig = function(config, configParams) {
    const isFirstRequest = typeof configParams == "undefined";
    
    config
      .newInfo()
      .setId("info1")
      .setText("Seleccione los datos que desea obtener");
  
    config
      .newSelectSingle()
      .setId("inputType")
      .setName("Seleccione un tipo")
  
      .setIsDynamic(true)
      .addOption(
        config
          .newOptionBuilder()
          .setLabel("URL del cubo / consulta de datos")
          .setValue("inputUrlSelector")
      )
      // .addOption(
      //   config
      //     .newOptionBuilder()
      //     .setLabel("URL de fuente en formato legacy")
      //     .setValue("inputUrlLegacySelector")
      // )
      .addOption(
        config
          .newOptionBuilder()
          .setLabel("URL de fuente en formato json-stat")
          .setValue("inputUrlJsonStatSelector")
      )
      .addOption(
        config
          .newOptionBuilder()
          .setLabel("Seleccionar operación estadística")
          .setValue("variableSelector")
      );
  
    if (!isFirstRequest && configParams.inputType === "variableSelector") {
      const statisticsOperations = config
        .newSelectSingle()
        .setId("operation")
        .setName("Operaciones estadísticas")
        .setIsDynamic(true)
        .setAllowOverride(false);
  
      const statisticsOperationsList = this.getStatisticsOperations();
      if(statisticsOperationsList.length != 0) {
        for(let operation of statisticsOperationsList) {
          const code = operation.urn;
          const title = getEsName(operation.name);
          statisticsOperations.addOption(
            config
              .newOptionBuilder()
              .setLabel(title)
              .setValue(code)
          );
        }
      } else {
        statisticsOperations.addOption(
          config
            .newOptionBuilder()
            .setLabel("Results not found")
            .setValue(false)
        );
      }
  
      if (!isFirstRequest && configParams.operation) {
        const cubes = config
          .newSelectSingle()
          .setId("cube")
          .setName("Cubos")
          .setIsDynamic(true)
          .setAllowOverride(false);
  
        const cubesList = this.getCubes(configParams.operation);
  
        if (cubesList.length != 0) {
          for(let cube of cubesList) {
            const code = cube.selfLink.href;
            const title = getEsName(cube.name);
            cubes.addOption(
              config
                .newOptionBuilder()
                .setLabel(title)
                .setValue(code)
            );
          }
  
        } else {
          cubes.addOption(
            config
              .newOptionBuilder()
              .setLabel("No hay cubos para esta operación. Selecciona otra")
          );
        }
  
  
        if (!isFirstRequest && configParams.operation && configParams.cube) {
          config = this.obtainFormatResponse(config, configParams);
        }
      }
    }
  
    if (!isFirstRequest) {
      if (configParams.inputType === "inputUrlSelector") {
        config
          .newTextInput()
          .setId("inputUrl")
          .setName("URL")
          .setHelpText(
            "Esta URL debe ser una petición de la API. Por ejemplo: https://datos.canarias.es/api/estadisticas/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001"
          )
          .setPlaceholder("");

        config = this.obtainFormatResponse(config, configParams);
      } else if (configParams.inputType === "inputUrlJsonStatSelector") {
        config
          .newTextInput()
          .setId("inputUrl")
          .setName("URL")
          .setHelpText(
            "Esta URL debe ser una petición de la API JSON-STAT. Por ejemplo: https://json-stat.org/samples/galicia.json"
          )
          .setPlaceholder("");

        config = this.obtainFormatResponse(config, configParams);
      // } else if (configParams.inputType === "inputUrlLegacySelector") {
      //   config
      //     .newTextInput()
      //     .setId("inputUrl")
      //     .setName("URL")
      //     .setHelpText(
      //       "Esta URL debe ser una petición de la API Legacy. Por ejemplo: http://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&uuidConsulta=e3665b2f-68a4-4e54-86a9-9da0062887e1"
      //     )
      //     .setPlaceholder("");

      //   config = this.obtainFormatResponse(config, configParams);
      }
    }
  
    config.setDateRangeRequired(true);
  
    return config;
  }
  
  /* istanbul ignore next */
  this.obtainFormatResponse = function(config, configParams = null) {
    config
      .newInfo()
      .setId("info2")
      .setText("Formato de respuesta:");
    config
      .newInfo()
      .setId("info3")
      .setText("Modelo de datos");
    config
      .newCheckbox()
      .setId("showMeasureColumns")
      .setName("Visualizar las medidas como columnas");
    config
      .newInfo()
      .setId("info4")
      .setText("Etiquetado");

    if (!configParams || !configParams.inputType || configParams.inputType !== "inputUrlJsonStatSelector") {
      config
        .newCheckbox()
        .setId("recodeDates")
        .setName(
          "Incluir campo calculado con fecha a partir de periodos de referencia"
        );
      config
        .newCheckbox()
        .setId("showGranularity")
        .setName(
          'Añadir las columnas "Granularidad geográfica" y "Granularidad temporal" (solo para URL jaxi-istac)'
        );
      config
        .newCheckbox()
        .setId("showLabels")
        .setName("Añadir las etiquetas de las dimensiones al conjunto de datos");
      config
        .newCheckbox()
        .setId("allLanguages")
        .setName("Añadir todos los idiomas");
    }
  
    return config;
  }
  
  this.getStatisticsOperations = function() {
    return getProcessAndCacheData("operations", getEndpoint(OPERATIONS_KEY, OPERATIONS_END_OF_ENDPOINT));
  }
  
  this.getCubes = function(urnOfOperation) {
    return getProcessAndCacheData("cubes", getEndpoint(CUBES_KEY, CUBES_END_OF_ENDPOINT).replace("URN_OF_CUBE", urnOfOperation));
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = ConfigHelper;
}
