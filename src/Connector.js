
/* istanbul ignore next */
if (typeof require !== "undefined") {
  var ConfigHelper = require("./ConfigHelper.js")["default"];
  var DataHelper = require("./DataHelper.js")["default"];
  var SchemaHelper = require("./SchemaHelper.js")["default"];
  var JsonStatDataHelper = require("./JsonStatDataHelper.js")["default"];
  var JsonStatSchemaHelper = require("./JsonStatSchemaHelper.js")["default"];
  var LegacyDataHelper = require("./LegacyDataHelper.js")["default"];
  var LegacySchemaHelper = require("./LegacySchemaHelper.js")["default"];
}

function Connector(services) {
  const configHelper = new ConfigHelper(services);
  const jsonStatDataHelper = new JsonStatDataHelper(services);
  const jsonStatSchemaHelper = new JsonStatSchemaHelper(services);
  const dataHelper = new DataHelper(services);
  const schemaHelper = new SchemaHelper(services);
  const legacyDataHelper = new LegacyDataHelper(services);
  const legacySchemaHelper = new LegacySchemaHelper(services);

  /* istanbul ignore next */
  /**
   * Get data helper class according to selected config.
   * @return {DataHelper} Data helper class
   */
  this.getDataHelper = function(configParams) {
    if (configParams.inputType == "inputUrlJsonStatSelector") {
      return jsonStatDataHelper;
    }
    if((configParams.inputType == "inputUrlSelector" || configParams.inputType == "inputUrlLegacySelector") && configParams.inputUrl) {
      if(configParams.inputUrl.indexOf("http://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&") === 0) {
        return legacyDataHelper;
      }
      if(configParams.inputUrl.indexOf("https://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&") === 0) {
        return legacyDataHelper;
      }
    }
    return dataHelper;
  }

  /* istanbul ignore next */
  /**
   * Get schema helper class according to selected config.
   * @return {SchemaHelper} Schema helper class
   */
  this.getSchemaHelper = function(configParams) {
    if (configParams.inputType == "inputUrlJsonStatSelector") {
      return jsonStatSchemaHelper;
    }
    if((configParams.inputType == "inputUrlSelector" || configParams.inputType == "inputUrlLegacySelector") && configParams.inputUrl) {
      if(configParams.inputUrl.indexOf("http://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&") === 0) {
        return legacySchemaHelper;
      }
      if(configParams.inputUrl.indexOf("https://www.gobiernodecanarias.org/istac/jaxi-istac/tabla.do?accion=jsonMtd&") === 0) {
        return legacySchemaHelper;
      }
    }
    return schemaHelper;
  }

  /* istanbul ignore next */
  /**
   * Builds the Community Connector fields object.
   * @return {Fields} The Community Connector fields.
   * @see https://developers.google.com/apps-script/reference/data-studio/fields
   */
  this.getFields = function(request) {
    const cc = DataStudioApp.createCommunityConnector();
    const fields = cc.getFields();
    const types = cc.FieldType;
    const selectedSchemaHelper = this.getSchemaHelper(request.configParams);
    const columns = selectedSchemaHelper.getColumns(request.configParams);

    const typesTranslator = {
      string: types.TEXT,
      float: types.NUMBER,
      date: types.YEAR_MONTH_DAY,
      // date_YEARLY: types.YEAR,
      // date_BIYEARLY: types.YEAR_MONTH,
      // date_FOUR_MONTHLY: types.YEAR_MONTH,
      // date_MONTHLY: types.YEAR_MONTH,
      // date_QUARTERLY: types.YEAR_QUARTER,
      // date_DAILY: types.YEAR_MONTH_DAY,
      // date_WEEKLY: types.YEAR_WEEK
    };

    // sufijo añadido al id de columna para que al actualizar una URL
    // editando la conexion se actualice el tipo de fecha (si no, no se actualiza)
    const idsTranslator = {
      date: "_date_YEAR_MONTH_DAY",
      // date_YEARLY: "_date_YEAR",
      // date_BIYEARLY: "_date_YEAR_MONTH",
      // date_FOUR_MONTHLY: "_date_YEAR_MONTH",
      // date_MONTHLY: "_date_YEAR_MONTH",
      // date_QUARTERLY: "_date_YEAR_QUARTER",
      // date_DAILY: "_date_YEAR_MONTH_DAY",
      // date_WEEKLY: "_date_YEAR_WEEK"
    };

    for(let column of columns) {
      const dataType = typesTranslator[column.dataType];
      const idSuffix = idsTranslator[column.dataType];
      if (column.columnRole === "metric") {
        fields
          .newMetric()
          .setId(idSuffix ? (column.id + idSuffix) : column.id)
          .setName(column.name)
          .setType(dataType);
      } else {
        fields
          .newDimension()
          .setId(idSuffix ? (column.id + idSuffix) : column.id)
          .setName(column.name)
          .setType(dataType);
      }
    }
  
    return fields;
  }
  
  /* istanbul ignore next */
  /**
   * Builds the Community Connector schema.
   * @param {object} request The request.
   * @return {object} The schema.
   */
  this.getSchema = function(request) {
    const fields = this.getFields(request).build();
    return { schema: fields };
  }
  
  /* istanbul ignore next */
  /**
   * Builds the Community Connector config.
   * @return {Config} The Community Connector config.
   * @see https://developers.google.com/apps-script/reference/data-studio/config
   */
  this.getConfig = function(request) {
    const cc = DataStudioApp.createCommunityConnector();
    const configParams = request.configParams;
    const isFirstRequest = typeof configParams == "undefined";
    let config = cc.getConfig();
    
    if (isFirstRequest) {
      config.setIsSteppedConfig(true);
    } else if (!isFirstRequest && this.checkIfEndConfiguration(configParams)) {
      config.setIsSteppedConfig(true);
    }
  
    config = configHelper.getConfig(config, configParams);
  
    return config.build();
  }
  
  this.checkIfEndConfiguration = function(configParams) {
    let result = false;
    if (configParams.inputType == "inputUrlSelector" || configParams.inputType == "inputUrlJsonStatSelector" || configParams.inputType == "inputUrlLegacySelector") {
      result = false;
    } else if (
      configParams.inputType == "variableSelector" &&
      !configParams.cube
    ) {
      result = true;
    }
    return result;
  }
  
  /**
   * Gets the Auth type.
   * @return {object} The auth type.
   */
  this.getAuthType = function() {
    const response = { type: "NONE" };
    return response;
  }
  
  /* istanbul ignore next */
  /**
   * Gets the data for the community connector  
   * @param {object} request The request.
   * @return {object} The data.
   */
  this.getData = function(request) {
    const requestedFieldIds = request.fields.map(field => field.name);
    const requestedFields = this.getFields(request).forIds(requestedFieldIds);
    const selectedDataHelper = this.getDataHelper(request.configParams);
    const rows = selectedDataHelper.getRows(request.configParams, requestedFields);
    return {
      schema: requestedFields.build(),
      rows: rows
    };
  }
  
  this.isAdminUser = function() {
    return true;
  }
}

/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = Connector;
}
