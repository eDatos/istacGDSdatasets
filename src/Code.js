/* istanbul ignore file */
/* global CacheService, UrlFetchApp */
if (typeof require !== "undefined") {
  var Connector = require("./Connector.js")["default"];
  var CacheHelper = require("./CacheHelper.js")["default"];
  var Utils = require("./Utils.js")["default"];
  var LegacyUtils = require("./LegacyUtils.js")["default"];
}

/* global CacheService, UrlFetchApp, Utilities */
function getConnector() {
  const utils = new Utils();
  const legacyUtils = new LegacyUtils();
  const urlFetchApp = UrlFetchApp;
  return new Connector({
    Utils: utils,
    LegacyUtils: legacyUtils,
    CacheService: CacheService,
    UrlFetchApp: urlFetchApp,
    CacheHelper: new CacheHelper(CacheService, utils, urlFetchApp, Utilities)
  });
}

function getConfig(request) {
  return getConnector().getConfig(request);
}

function getSchema(request) {
  return getConnector().getSchema(request);
}

function getData(request) {
  return getConnector().getData(request);
}

function getAuthType() {
  return getConnector().getAuthType();
}

function isAdminUser() {
  return getConnector().isAdminUser();
}
