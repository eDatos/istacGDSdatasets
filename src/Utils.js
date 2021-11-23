function Utils() {

  this.getUrl = function(configParams) {
    // TODO: commented for json stat
    switch (configParams.inputType) {
      case "variableSelector":
        return configParams.cube.substring(0, configParams.cube.lastIndexOf("/")) + "/~latest.json";
      case "inputUrlSelector":
        return configParams.inputUrl + "/~latest.json";
      case "inputUrlJsonStatSelector":
        return configParams.inputUrl;
    }
    return configParams.inputUrl;
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

  this.getJsonStatMeasureColumns = function(response) {
    let measureColumns = {};

    const metricColumns = response.role && response.role.metric ? response.role.metric : Object.keys(response.dimension);

    for(let dimId of metricColumns) {
      const dimension = response.dimension[dimId];
      if(dimension) {
        measureColumns.dimension = dimId;
        measureColumns.label = dimension.label;
        const dimCatLabelTable = Object.keys(dimension.category.label);
        let values = [];
        for(let dimCatLabelIdx of dimCatLabelTable) {
          values.push({
            id: dimCatLabelIdx,
            label: dimension.category.label[dimCatLabelIdx]
          });
        }
        measureColumns.values = values;
        break; // only get first
      }
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

  this.getJsonStatDimensions = function(response) {
    let dimensions = {};
    for (let i of Object.keys(response.dimension)) {
      dimensions[i] = {
        id: i,
        label: response.dimension[i].label,
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

  this.getJsonStatTimeDimensions = function(response) {
    let dimensions = {};

    const metricColumns = response.role && response.role.time ? response.role.time : null;

    if(!metricColumns || metricColumns.length < 1) {
      return undefined;
    } else {
      return metricColumns[0];
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
