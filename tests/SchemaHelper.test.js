if (typeof require !== "undefined") {
  var SchemaHelper = require("../src/SchemaHelper.js")["default"];
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
}

let schemaHelper;

beforeEach(() => {
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  const utils = new Utils();
  schemaHelper = new SchemaHelper({
    UrlFetchApp: urlFetchApp,
    Utils: utils,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock())
  });
});

test("getColumns: without languages nor decode", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004"
  };
  var expectedResult = [{ "columnRole": "metric", "dataType": "float", "id": "OBSERVATION", "name": "Ventas de cemento al por mayor por islas de Canarias y periodos" }, { "columnRole": "dimension", "dataType": "string", "id": "MEDIDAS", "name": "Indicador" }, { "columnRole": "dimension", "dataType": "string", "id": "TERRITORIO", "name": "Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "TIME_PERIOD", "name": "Periodo" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
});

test("getColumns: with input url", () => {
  var configParams = {
    inputType: "inputUrlSelector",
    inputUrl:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001"
  };
  var expectedResult = [{ "columnRole": "metric", "dataType": "float", "id": "OBSERVATION", "name": "Ventas de cemento al por mayor por islas de Canarias y periodos" }, { "columnRole": "dimension", "dataType": "string", "id": "MEDIDAS", "name": "Indicador" }, { "columnRole": "dimension", "dataType": "string", "id": "TERRITORIO", "name": "Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "TIME_PERIOD", "name": "Periodo" }];

    expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
});

test("getColumns: with recodeDates", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true"
  };
  var expectedResult = [{ "columnRole": "metric", "dataType": "float", "id": "OBSERVATION", "name": "Ventas de cemento al por mayor por islas de Canarias y periodos" }, { "columnRole": "dimension", "dataType": "string", "id": "MEDIDAS", "name": "Indicador" }, { "columnRole": "dimension", "dataType": "string", "id": "TERRITORIO", "name": "Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "TIME_PERIOD", "name": "Periodo" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
});

test("getColumns: with recodeDates and showMeasureColumns", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true",
    showMeasureColumns: "true"
  };
  var expectedResult = [{ "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO", "name": "MEDIDAS_VENTA_CEMENTO" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA", "name": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA", "name": "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA" }, { "columnRole": "dimension", "dataType": "string", "id": "TERRITORIO", "name": "Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "TIME_PERIOD", "name": "Periodo" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
});


test("getColumns: with recodeDates, showMeasureColumns and showLabels", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true",
    showMeasureColumns: "true",
    showLabels: "true"
  };
  var expectedResult = [{ "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO", "name": "MEDIDAS_VENTA_CEMENTO" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA", "name": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA", "name": "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA" }, { "columnRole": "dimension", "dataType": "string", "id": "TERRITORIO", "name": "Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_TERRITORIO", "name": "Etiqueta_Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "TIME_PERIOD", "name": "Periodo" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_TIME_PERIOD", "name": "Etiqueta_Periodo" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
});

test("getColumns: with recodeDates, showMeasureColumns, showLabels and allLanguages", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true",
    showMeasureColumns: "true",
    showLabels: "true",
    allLanguages: "true"
  };
  var expectedResult = [{ "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO", "name": "MEDIDAS_VENTA_CEMENTO" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA", "name": "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL", "name": "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL" }, { "columnRole": "metric", "dataType": "float", "id": "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA", "name": "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA" }, { "columnRole": "dimension", "dataType": "string", "id": "TERRITORIO", "name": "Territorio" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_TERRITORIO_es", "name": "Etiqueta_Territorio_es" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_TERRITORIO_en", "name": "Etiqueta_Territorio_en" }, { "columnRole": "dimension", "dataType": "string", "id": "TIME_PERIOD", "name": "Periodo" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_TIME_PERIOD_es", "name": "Etiqueta_Periodo_es" }, { "columnRole": "dimension", "dataType": "string", "id": "Etiqueta_TIME_PERIOD_en", "name": "Etiqueta_Periodo_en" }, { "columnRole": "dimension", "dataType": "date", "id": "Fecha", "name": "Fecha" }];

  expect(schemaHelper.getColumns(configParams)).toEqual(expectedResult);
});
