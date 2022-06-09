function Utils() {

  this.getUrl = function(configParams) {
    let url = '';
    let substring = '';
    let lastPath = '';
    let finalUrl = '';
    let isQuery = false;
    // TODO: commented for json stat
    switch (configParams.inputType) {
      case "variableSelector":
        finalUrl = configParams.cube.substring(0, configParams.cube.lastIndexOf("/")) + "/~latest.json";
        break;
      case "inputUrlSelector":
        if(configParams.inputUrl.indexOf('?') > 0) {
          url = configParams.inputUrl.substr(0, configParams.inputUrl.indexOf('?'));
          substring = configParams.inputUrl.substr(configParams.inputUrl.indexOf('?'));
        } else {
          url = configParams.inputUrl;
          substring = '';
        }

        url = url.replace(/\/*$/, '');

        isQuery = url.indexOf('/queries/ISTAC/') > 0;
        lastPath = url.substr(url.lastIndexOf("/"));
        if(/\.json$/.test(lastPath)) {
          finalUrl = url + substring;
        } else if(lastPath == '/~latest' || isQuery || /\/[0-9]+\.[0-9]+$/.test(lastPath)) {
          finalUrl = url + '.json' + substring;
        } else {
          finalUrl = url + '/~latest.json' + substring;
        }
        break;
      case "inputUrlJsonStatSelector":
      case "inputUrlLegacySelector":
        finalUrl = configParams.inputUrl;
        break;
    }
    let decodedUrl = finalUrl;
    do {
      finalUrl = decodedUrl;
      decodedUrl = decodeURI(finalUrl);
    } while(finalUrl != decodedUrl);
    finalUrl = encodeURI(decodedUrl);
    return finalUrl;
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

    let dimId = null;

    // if(metricColumns.indexOf('unit') >= 0) {
    //   dimId = 'unit';
    // } else {
      for(let curDimId of metricColumns) {
        const curDimension = response.dimension[curDimId];
        if(curDimension) {
          dimId = curDimId;
          break;
        }
      }
    // }

    if(dimId === null) {
      return {};
    }

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

    if(!metricColumns) {
      if(Object.keys(response.dimension).indexOf('time') >= 0) {
        return 'time';
      }
      return undefined;
    }
    if(metricColumns.length < 1) {
      return undefined;
    }
    return metricColumns[0];
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
  
  this.normalize = function(id) {
    return id.replace(/[^a-zA-Z0-9]/gi, '_');
  }
  
  /* istanbul ignore next */
  this.throwConectorError = function(exception, message) {
    DataStudioApp.createCommunityConnector()
       .newUserError()
       .setDebugText("Error while fetching data from API. Exception details: " + exception.stack)
       .setText(message)
       .throwException();
  }

  this.weekToDate = function(y, w) {
    let simple = new Date(y, 0, 1 + (w - 1) * 7);
    let dow = simple.getDay();
    let ISOweekStart = simple;
    if (dow <= 4) {
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    ISOweekStart.setHours(12);
    return ISOweekStart;
  }
}


/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = Utils;
}
