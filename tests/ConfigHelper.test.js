if (typeof require !== "undefined") {
  var ConfigHelper = require("../src/ConfigHelper.js")["default"];
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
}

let configHelper;

beforeEach(() => {
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  const utils = new Utils();
  configHelper = new ConfigHelper({
    UrlFetchApp: urlFetchApp,
    Utils: utils,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock())
  });
});

test("getStatisticsOperations", () => {
  var expectedResponse = [
    {
      id: "C00016A",
      kind: "statisticalOperations#operation",
      name: {
        text: [{ lang: "es", value: "Estadística de Venta Mayor de Cemento" }]
      },
      selfLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00016A",
        kind: "statisticalOperations#operation"
      },
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00016A"
    },
    {
      id: "C00036A",
      kind: "statisticalOperations#operation",
      name: {
        text: [
          {
            lang: "es",
            value:
              "Recopilación de Estadísticas sobre Donaciones y Trasplantes de Órganos"
          }
        ]
      },
      selfLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00036A",
        kind: "statisticalOperations#operation"
      },
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00036A"
    },
    {
      id: "C00010A",
      kind: "statisticalOperations#operation",
      name: {
        text: [
          { lang: "es", value: "Sistema de Información Electoral en Canarias" }
        ]
      },
      selfLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/operations/v1.0/operations/C00010A",
        kind: "statisticalOperations#operation"
      },
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00010A"
    }
  ];

  expect(configHelper.getStatisticsOperations()).toEqual(expectedResponse);
});

test("getCubes", () => {
  var expectedResponse = [
    {
      id: "E30151A_000001",
      kind: "statisticalResources#dataset",
      name: {
        text: [
          {
            lang: "es",
            value:
              "Sociedades mercantiles según naturaleza jurídica. Comunidades autónomas y provincias por meses"
          }
        ]
      },
      selfLink: {
        href:
          "https://datos.canarias.es/api/estadisticas/statistical-resources/v1.0/datasets/ISTAC/E30151A_000001/001.002",
        kind: "statisticalResources#dataset"
      },
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Dataset=ISTAC:E30151A_000001(001.002)"
    }
  ];
  var urn =
    "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=E30151A";

  expect(configHelper.getCubes(urn)).toEqual(expectedResponse);

});

