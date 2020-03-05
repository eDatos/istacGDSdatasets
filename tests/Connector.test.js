if (typeof require !== "undefined") {
  var CacheHelper = require("../src/CacheHelper.js")["default"];
  var CacheServiceMock = require("./mocks/CacheServiceMock.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
  var UrlFetchAppMock = require("./mocks/UrlFetchAppMock.js")["default"];
  var apiResponses = require("./helpers/ApiResponses.js")["default"];
  var Connector = require("../src/Connector.js")["default"];
  var Utils = require("../src/Utils.js")["default"];
  var UtilitiesMock = require("./mocks/UtilitiesMock.js")["default"];
}

let connector;

beforeEach(() => {
  const urlFetchApp = new UrlFetchAppMock(apiResponses);
  const utils = new Utils();
  connector = new Connector({
    UrlFetchApp: new UrlFetchAppMock(apiResponses),
    Utils: utils,
    CacheHelper: new CacheHelper(new CacheServiceMock(), utils, urlFetchApp, new UtilitiesMock())
  });
});

test("getAuthType", () => {
  expect(connector.getAuthType().type).toBe("NONE");
});

test("isAdminUser", () => {
  expect(connector.isAdminUser()).toBe(true);
});

test("checkIfEndConfiguration : with inputUrlSelector", () => {
  var configParams = {
    inputType: "inputUrlSelector"
  };
  expect(connector.checkIfEndConfiguration(configParams)).toBe(false);
});

test("checkIfEndConfiguration : with variableSelector without cube", () => {
  var configParams = {
    inputType: "variableSelector"
  };
  expect(connector.checkIfEndConfiguration(configParams)).toBe(true);
});

test("checkIfEndConfiguration : with variableSelector and cube", () => {
  var configParams = {
    inputType: "variableSelector",
    cube: "http://fakeurl.com"
  };
  expect(connector.checkIfEndConfiguration(configParams)).toBe(false);
});