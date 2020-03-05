function Utils() {

  this.getUrl = function(configParams) {
    switch (configParams.inputType) {
      case "variableSelector":
        return configParams.cube.substring(0, configParams.cube.lastIndexOf("/")) + "/~latest.json";
      case "inputUrlSelector":
        return configParams.inputUrl + "/~latest.json";
    }
  }
  
  this.getMeasureColumns = function(response) {
    let measureColumns = {};
    const dimension = this.keyBy(response.metadata.dimensions.dimension, "type")
      .MEASURE_DIMENSION;
    if (dimension) {
      measureColumns.dimension = dimension.id;
      let values = [];
      for(let i = 0; i < dimension.dimensionValues.value.length; i++) {
        values[i] = {
          id: dimension.dimensionValues.value[i].id,
          label: this.keyBy(dimension.dimensionValues.value[i].name.text, "lang").es
            .value
        };
      }
      measureColumns.values = values;
    }
    return measureColumns;
  }
  
  this.getDimensions = function(response) {
    let dimensions = {};
    for (let i = 0; i < response.metadata.dimensions.total; i++) {
      dimensions[i] = {
        id: response.metadata.dimensions.dimension[i].id,
        label: this.keyBy(response.metadata.dimensions.dimension[i].name.text, "lang")
          .es.value
      };
    }
    return dimensions;
  }
  
  this.getTimeDimensions = function(response) {
    const dimensions = this.keyBy(response.metadata.dimensions.dimension, "type")
    if (dimensions.TIME_DIMENSION) {
      return dimensions.TIME_DIMENSION.id;
    } else {
      return undefined;
    }
  }
  
  /*
  * Function that make an object from an array of objects using one of the attrs as the key
  */
  this.keyBy = function(object, property) {
    const newObject = {};
    for (let rowItem of Object.values(object)) {
      newObject[rowItem[property]] = rowItem;
    }
    return newObject;
  }
  
  this.values = function(object) {
    return Object.values(object);
  }
  
  
  this.extend = function(destinationObject, sourceObject) {
    for (let key of Object.keys(sourceObject)) {
      destinationObject[key] = sourceObject[key];
    }
    return destinationObject;
  }
  
 
  
  /* istanbul ignore next */
  this.throwConectorError = function(exception, message) {
     DataStudioApp.createCommunityConnector()
       .newUserError()
       .setDebugText("Error while fetching data from API. Exception details: " + exception)
       .setText(message)
       .throwException();
  }
}


/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = Utils;
}