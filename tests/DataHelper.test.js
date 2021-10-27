if (typeof require !== "undefined") {
  var DataHelper = require("../src/DataHelper.js")["default"];
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
  var RecodeDatesHelper = require("../src/RecodeDatesHelper")["default"];
}

let dataHelper;

beforeEach(() => {
  const utils = new Utils();
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  dataHelper = new DataHelper({
    UrlFetchApp: urlFetchApp,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock()),
    Utils: utils,
    RecodeDatesHelper: new RecodeDatesHelper()
  });
});

var Field = function (name, id) {
  this.name = name;
  this.id = id;

  this.getId = function () {
    return this.id;
  }
};

var RequestedFields = function () {
  this.requestedFields = [];

  this.addField = function (field) {
    this.requestedFields.push(field);
  }

  this.asArray = function () {
    return this.requestedFields;
  }
};

test("_processData: without languages nor decode", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004"
  };
  
  var expectedResult = [{ "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M09"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M08"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M07"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M06"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M05"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M04"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M03"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M02"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M01"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M12"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M11"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M10"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M09"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M08"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M07"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M06"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M05"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M04"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M03"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M02"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M01"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M12"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M11"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M10"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M09"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M08"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M07"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M06"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M05"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M04"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M03"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M02"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M01"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M12"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M11"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M10"] }];


  requestedFields = new RequestedFields()
  requestedFields.addField(new Field("Ventas de cemento al por mayor por islas de Canarias y periodos", "OBSERVATIONS"))
  requestedFields.addField(new Field("Indicador", "MEDIDAS"))
  requestedFields.addField(new Field("Territorio", "TERRITORIO"))
  requestedFields.addField(new Field("Periodo", "TIME_PERIOD"))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);
});

test("_processData: with input url", () => {
  var configParams = {
    inputType: "inputUrlSelector",
    inputUrl:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001"
  };

  var expectedResult = [{ "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M09"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M08"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M07"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M06"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M05"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M04"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M03"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M02"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M01"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M12"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M11"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M10"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M09"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M08"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M07"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M06"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M05"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M04"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M03"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M02"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M01"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M12"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M11"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M10"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M09"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M08"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M07"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M06"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M05"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M04"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M03"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M02"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M01"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M12"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M11"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M10"] }];

  var requestedFields = new RequestedFields()
  requestedFields.addField(new Field("Ventas de cemento al por mayor por islas de Canarias y periodos", "OBSERVATIONS"))
  requestedFields.addField(new Field("Indicador", "MEDIDAS"))
  requestedFields.addField(new Field("Territorio", "TERRITORIO"))
  requestedFields.addField(new Field("Periodo", "TIME_PERIOD"))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);
});

test("_processData: with recodeDates", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true"
  };

  var expectedResult = [{ "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M09", "20190901"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M08", "20190801"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M07", "20190701"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M06", "20190601"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M05", "20190501"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M04", "20190401"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M03", "20190301"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M02", "20190201"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2019-M01", "20190101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018", "20180101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M12", "20181201"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M11", "20181101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M10", "20181001"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M09", "20180901"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M08", "20180801"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M07", "20180701"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M06", "20180601"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M05", "20180501"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M04", "20180401"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M03", "20180301"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M02", "20180201"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2018-M01", "20180101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017", "20170101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M12", "20171201"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M11", "20171101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M10", "20171001"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M09", "20170901"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M08", "20170801"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M07", "20170701"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M06", "20170601"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M05", "20170501"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M04", "20170401"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M03", "20170301"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M02", "20170201"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2017-M01", "20170101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016", "20160101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M12", "20161201"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M11", "20161101"] }, { "values": ["", "VENTA_CEMENTO__TASA_VARIACION_ANUAL", "ES704", "2016-M10", "20161001"] }];

  var requestedFields = new RequestedFields()
  requestedFields.addField(new Field("Ventas de cemento al por mayor por islas de Canarias y periodos", "OBSERVATIONS"))
  requestedFields.addField(new Field("Indicador", "MEDIDAS"))
  requestedFields.addField(new Field("Territorio", "TERRITORIO"))
  requestedFields.addField(new Field("Periodo", "TIME_PERIOD"))
  requestedFields.addField(new Field("Fecha", "Fecha"))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);
});

test("_processData: with recodeDates and showMeasureColumns", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true",
    showMeasureColumns: "true"
  };
 
  var expectedResult = [{ "values": ["", "", "", "", "-7.61", "", "", "", "ES704", "2019-M09", "20190901"] }, { "values": ["", "", "", "", "-4.38", "", "", "", "ES704", "2019-M08", "20190801"] }, { "values": ["", "", "", "", "-16.6", "", "", "", "ES704", "2019-M07", "20190701"]}, { "values": ["", "", "", "", "-27.67", "", "", "", "ES704", "2019-M06", "20190601"] }, { "values": ["", "", "", "", "-16.95", "", "", "", "ES704", "2019-M05", "20190501"] }, { "values": ["", "", "", "", "-24.44", "", "", "", "ES704", "2019-M04", "20190401"] }, { "values": ["", "", "", "", "-33.93", "", "", "", "ES704", "2019-M03", "20190301"] }, { "values": ["", "", "", "", "-1.92", "", "", "", "ES704", "2019-M02", "20190201"] }, { "values": ["", "", "", "", "6.02", "", "", "", "ES704", "2019-M01", "20190101"] }, { "values": ["", "", "", "", "33.33", "", "", "", "ES704", "2018", "20180101"] }, { "values": ["", "", "", "", "18.66", "", "", "", "ES704", "2018-M12", "20181201"] }, { "values": ["", "", "", "", "28.88", "", "", "", "ES704", "2018-M11", "20181101"] }, { "values": ["", "", "", "", "43.76", "", "", "", "ES704", "2018-M10", "20181001"] }, { "values": ["", "", "", "", "31.07", "", "", "", "ES704", "2018-M09", "20180901"] }, { "values": ["", "", "", "", "15.18", "", "", "", "ES704", "2018-M08", "20180801"] }, { "values": ["", "", "", "", "47.38", "", "", "", "ES704", "2018-M07", "20180701"] }, { "values": ["", "", "", "", "29.67", "", "", "", "ES704", "2018-M06", "20180601"] }, { "values": ["", "", "", "", "29.25", "", "", "", "ES704", "2018-M05", "20180501"] }, { "values": ["", "", "", "", "69.41", "", "", "", "ES704", "2018-M04", "20180401"] }, { "values": ["", "", "", "", "40.03", "", "", "", "ES704", "2018-M03", "20180301"] }, { "values": ["", "", "", "", "37.94", "", "", "", "ES704", "2018-M02", "20180201"] }, { "values": ["", "", "", "", "12.28", "", "", "", "ES704", "2018-M01", "20180101"] }, { "values": ["", "", "", "", "22.17", "", "", "", "ES704", "2017", "20170101"] }, { "values": ["", "", "", "", "12.27", "", "", "", "ES704", "2017-M12", "20171201"] }, { "values": ["", "", "", "", "-1.76", "", "", "", "ES704", "2017-M11", "20171101"] }, { "values": ["", "", "", "", "-17.91", "", "", "", "ES704", "2017-M10", "20171001"] }, { "values": ["", "", "", "", "-3.8", "", "", "", "ES704", "2017-M09", "20170901"] }, { "values": ["", "", "", "", "45", "", "", "", "ES704", "2017-M08", "20170801"] }, { "values": ["", "", "", "", "92.25", "", "", "", "ES704", "2017-M07", "20170701"] }, { "values": ["", "", "", "", "56.03", "", "", "", "ES704", "2017-M06", "20170601"] }, { "values": ["", "", "", "", "76.2", "", "", "", "ES704", "2017-M05", "20170501"] }, { "values": ["", "", "", "", "3.43", "", "", "", "ES704", "2017-M04", "20170401"] }, { "values": ["", "", "", "", "26.14", "", "", "", "ES704", "2017-M03", "20170301"] }, { "values": ["", "", "", "", "1.59", "", "", "", "ES704", "2017-M02", "20170201"] }, { "values": ["", "", "", "", "51.56", "", "", "", "ES704", "2017-M01", "20170101"] }, { "values": ["", "", "", "", "-3.08", "", "", "", "ES704", "2016", "20160101"] }, { "values": ["", "", "", "", "-7.77", "", "", "", "ES704", "2016-M12", "20161201"] }, { "values": ["", "", "", "", "27.28", "", "", "", "ES704", "2016-M11", "20161101"] }, { "values": ["", "", "", "", "17.81", "", "", "", "ES704", "2016-M10", "20161001"] }];
 
  var requestedFields = new RequestedFields()
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO", "MEDIDAS_VENTA_CEMENTO"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA", "MEDIDAS_VENTA_CEMENTO_ACUMULADA"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA", "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA", "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA"))
  requestedFields.addField(new Field("Territorio", "TERRITORIO"))
  requestedFields.addField(new Field("Periodo", "TIME_PERIOD"))
  requestedFields.addField(new Field("Fecha", "Fecha"))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);
});

test("_processData: with recodeDates, showMeasureColumns and showLabels", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true",
    showMeasureColumns: "true",
    showLabels: "true"
  };
 
  var expectedResult = [{ "values": ["", "", "", "", "-7.61", "", "", "", "ES704", "Fuerteventura", "2019-M09", "09/2019", "20190901"] }, { "values": ["", "", "", "", "-4.38", "", "", "", "ES704", "Fuerteventura", "2019-M08", "08/2019", "20190801"] }, { "values": ["", "", "", "", "-16.6", "", "", "", "ES704", "Fuerteventura", "2019-M07", "07/2019", "20190701"] }, { "values": ["", "", "", "", "-27.67", "", "", "", "ES704", "Fuerteventura", "2019-M06", "06/2019", "20190601"] }, { "values": ["", "", "", "", "-16.95", "", "", "", "ES704", "Fuerteventura", "2019-M05", "05/2019", "20190501"] }, { "values": ["", "", "", "", "-24.44", "", "", "", "ES704", "Fuerteventura", "2019-M04", "04/2019", "20190401"] }, { "values": ["", "", "", "", "-33.93", "", "", "", "ES704", "Fuerteventura", "2019-M03", "03/2019", "20190301"] }, { "values": ["", "", "", "", "-1.92", "", "", "", "ES704", "Fuerteventura", "2019-M02", "02/2019", "20190201"] }, { "values": ["", "", "", "", "6.02", "", "", "", "ES704", "Fuerteventura", "2019-M01", "01/2019", "20190101"] }, { "values": ["", "", "", "", "33.33", "", "", "", "ES704", "Fuerteventura", "2018", "2018", "20180101"] }, { "values": ["", "", "", "", "18.66", "", "", "", "ES704", "Fuerteventura", "2018-M12", "12/2018", "20181201"] }, { "values": ["", "", "", "", "28.88", "", "", "", "ES704", "Fuerteventura", "2018-M11", "11/2018", "20181101"] }, { "values": ["", "", "", "", "43.76", "", "", "", "ES704", "Fuerteventura", "2018-M10", "10/2018", "20181001"] }, { "values": ["", "", "", "", "31.07", "", "", "", "ES704", "Fuerteventura", "2018-M09", "09/2018", "20180901"] }, { "values": ["", "", "", "", "15.18", "", "", "", "ES704", "Fuerteventura", "2018-M08", "08/2018", "20180801"] }, { "values": ["", "", "", "", "47.38", "", "", "", "ES704", "Fuerteventura", "2018-M07", "07/2018", "20180701"] }, { "values": ["", "", "", "", "29.67", "", "", "", "ES704", "Fuerteventura", "2018-M06", "06/2018", "20180601"] }, { "values": ["", "", "", "", "29.25", "", "", "", "ES704", "Fuerteventura", "2018-M05", "05/2018", "20180501"] }, { "values": ["", "", "", "", "69.41", "", "", "", "ES704", "Fuerteventura", "2018-M04", "04/2018", "20180401"] }, { "values": ["", "", "", "", "40.03", "", "", "", "ES704", "Fuerteventura", "2018-M03", "03/2018", "20180301"] }, { "values": ["", "", "", "", "37.94", "", "", "", "ES704", "Fuerteventura", "2018-M02", "02/2018", "20180201"] }, { "values": ["", "", "", "", "12.28", "", "", "", "ES704", "Fuerteventura", "2018-M01", "01/2018", "20180101"] }, { "values": ["", "", "", "", "22.17", "", "", "", "ES704", "Fuerteventura", "2017", "2017", "20170101"] }, { "values": ["", "", "", "", "12.27", "", "", "", "ES704", "Fuerteventura", "2017-M12", "12/2017", "20171201"] }, { "values": ["", "", "", "", "-1.76", "", "", "", "ES704", "Fuerteventura", "2017-M11", "11/2017", "20171101"] }, { "values": ["", "", "", "", "-17.91", "", "", "", "ES704", "Fuerteventura", "2017-M10", "10/2017", "20171001"] }, { "values": ["", "", "", "", "-3.8", "", "", "", "ES704", "Fuerteventura", "2017-M09", "09/2017", "20170901"] }, { "values": ["", "", "", "", "45", "", "", "", "ES704", "Fuerteventura", "2017-M08", "08/2017", "20170801"] }, { "values": ["", "", "", "", "92.25", "", "", "", "ES704", "Fuerteventura", "2017-M07", "07/2017", "20170701"] }, { "values": ["", "", "", "", "56.03", "", "", "", "ES704", "Fuerteventura", "2017-M06", "06/2017", "20170601"] }, { "values": ["", "", "", "", "76.2", "", "", "", "ES704", "Fuerteventura", "2017-M05", "05/2017", "20170501"] }, { "values": ["", "", "", "", "3.43", "", "", "", "ES704", "Fuerteventura", "2017-M04", "04/2017", "20170401"] }, { "values": ["", "", "", "", "26.14", "", "", "", "ES704", "Fuerteventura", "2017-M03", "03/2017", "20170301"] }, { "values": ["", "", "", "", "1.59", "", "", "", "ES704", "Fuerteventura", "2017-M02", "02/2017", "20170201"] }, { "values": ["", "", "", "", "51.56", "", "", "", "ES704", "Fuerteventura", "2017-M01", "01/2017", "20170101"] }, { "values": ["", "", "", "", "-3.08", "", "", "", "ES704", "Fuerteventura", "2016", "2016", "20160101"] }, { "values": ["", "", "", "", "-7.77", "", "", "", "ES704", "Fuerteventura", "2016-M12", "12/2016", "20161201"] }, { "values": ["", "", "", "", "27.28", "", "", "", "ES704", "Fuerteventura", "2016-M11", "11/2016", "20161101"] }, { "values": ["", "", "", "", "17.81", "", "", "", "ES704", "Fuerteventura", "2016-M10", "10/2016", "20161001"] }]


  var requestedFields = new RequestedFields()
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO", "MEDIDAS_VENTA_CEMENTO"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA", "MEDIDAS_VENTA_CEMENTO_ACUMULADA"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA", "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA", "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA"))
  requestedFields.addField(new Field("Territorio", "TERRITORIO"))
  requestedFields.addField(new Field("Etiqueta_Territorio", "Etiqueta_TERRITORIO"))
  requestedFields.addField(new Field("Periodo", "TIME_PERIOD"))
  requestedFields.addField(new Field("Etiqueta_Periodo", "Etiqueta_TIME_PERIOD"))
  requestedFields.addField(new Field("Fecha", "Fecha"))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);
});

test("_processData: with recodeDates, showMeasureColumns, showLabels and allLanguages", () => {
  var configParams = {
    inputType: "variableSelector",
    cube:
      "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004",
    recodeDates: "true",
    showMeasureColumns: "true",
    showLabels: "true",
    allLanguages: "true"
  };
  
  var expectedResult = [{"values": ["", "", "", "", "-7.61", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M09", "09/2019", "09/2019", "20190901"]}, {"values": ["", "", "", "", "-4.38", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M08", "08/2019", "08/2019", "20190801"]}, {"values": ["", "", "", "", "-16.6", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M07", "07/2019", "07/2019", "20190701"]}, {"values": ["", "", "", "", "-27.67", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M06", "06/2019", "06/2019", "20190601"]}, {"values": ["", "", "", "", "-16.95", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M05", "05/2019", "05/2019", "20190501"]}, {"values": ["", "", "", "", "-24.44", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M04", "04/2019", "04/2019", "20190401"]}, {"values": ["", "", "", "", "-33.93", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M03", "03/2019", "03/2019", "20190301"]}, {"values": ["", "", "", "", "-1.92", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M02", "02/2019", "02/2019", "20190201"]}, {"values": ["", "", "", "", "6.02", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2019-M01", "01/2019", "01/2019", "20190101"]}, {"values": ["", "", "", "", "33.33", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018", "2018", "2018", "20180101"]}, {"values": ["", "", "", "", "18.66", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M12", "12/2018", "12/2018", "20181201"]}, {"values": ["", "", "", "", "28.88", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M11", "11/2018", "11/2018", "20181101"]}, {"values": ["", "", "", "", "43.76", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M10", "10/2018", "10/2018", "20181001"]}, {"values": ["", "", "", "", "31.07", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M09", "09/2018", "09/2018", "20180901"]}, {"values": ["", "", "", "", "15.18", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M08", "08/2018", "08/2018", "20180801"]}, {"values": ["", "", "", "", "47.38", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M07", "07/2018", "07/2018", "20180701"]}, {"values": ["", "", "", "", "29.67", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M06", "06/2018", "06/2018", "20180601"]}, {"values": ["", "", "", "", "29.25", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M05", "05/2018", "05/2018", "20180501"]}, {"values": ["", "", "", "", "69.41", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M04", "04/2018", "04/2018", "20180401"]}, {"values": ["", "", "", "", "40.03", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M03", "03/2018", "03/2018", "20180301"]}, {"values": ["", "", "", "", "37.94", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M02", "02/2018", "02/2018", "20180201"]}, {"values": ["", "", "", "", "12.28", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2018-M01", "01/2018", "01/2018", "20180101"]}, {"values": ["", "", "", "", "22.17", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017", "2017", "2017", "20170101"]}, {"values": ["", "", "", "", "12.27", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M12", "12/2017", "12/2017", "20171201"]}, {"values": ["", "", "", "", "-1.76", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M11", "11/2017", "11/2017", "20171101"]}, {"values": ["", "", "", "", "-17.91", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M10", "10/2017", "10/2017", "20171001"]}, {"values": ["", "", "", "", "-3.8", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M09", "09/2017", "09/2017", "20170901"]}, {"values": ["", "", "", "", "45", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M08", "08/2017", "08/2017", "20170801"]}, {"values": ["", "", "", "", "92.25", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M07", "07/2017", "07/2017", "20170701"]}, {"values": ["", "", "", "", "56.03", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M06", "06/2017", "06/2017", "20170601"]}, {"values": ["", "", "", "", "76.2", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M05", "05/2017", "05/2017", "20170501"]}, {"values": ["", "", "", "", "3.43", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M04", "04/2017", "04/2017", "20170401"]}, {"values": ["", "", "", "", "26.14", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M03", "03/2017", "03/2017", "20170301"]}, {"values": ["", "", "", "", "1.59", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M02", "02/2017", "02/2017", "20170201"]}, {"values": ["", "", "", "", "51.56", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2017-M01", "01/2017", "01/2017", "20170101"]}, {"values": ["", "", "", "", "-3.08", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2016", "2016", "2016", "20160101"]}, {"values": ["", "", "", "", "-7.77", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2016-M12", "12/2016", "12/2016", "20161201"]}, {"values": ["", "", "", "", "27.28", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2016-M11", "11/2016", "11/2016", "20161101"]}, {"values": ["", "", "", "", "17.81", "", "", "", "ES704", "Fuerteventura", "Fuerteventura", "2016-M10", "10/2016", "10/2016", "20161001"]}]


  var requestedFields = new RequestedFields()
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO", "MEDIDAS_VENTA_CEMENTO"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA", "MEDIDAS_VENTA_CEMENTO_ACUMULADA"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA", "MEDIDAS_VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL", "MEDIDAS_VENTA_CEMENTO__VARIACION_ANUAL"))
  requestedFields.addField(new Field("MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA", "MEDIDAS_VENTA_CEMENTO__VARIACION_INTERPERIODICA"))
  requestedFields.addField(new Field("Territorio", "TERRITORIO"))
  requestedFields.addField(new Field("Etiqueta_Territorio_es", "Etiqueta_TERRITORIO_es"))
  requestedFields.addField(new Field("Etiqueta_Territorio_en", "Etiqueta_TERRITORIO_en"))
  requestedFields.addField(new Field("Periodo", "TIME_PERIOD"))
  requestedFields.addField(new Field("Etiqueta_Periodo_es", "Etiqueta_TIME_PERIOD_es"))
  requestedFields.addField(new Field("Etiqueta_Periodo_en", "Etiqueta_TIME_PERIOD_en"))
  requestedFields.addField(new Field("Fecha", "Fecha"))

  expect(dataHelper._processData(configParams, requestedFields)).toEqual(expectedResult);
  
});