function LegacyUtils() {

  const strPad = function (input, padLength, padString = ' ') {
    while (input.length < padLength) {
      input = padString + input;
    }
    return input;
  };

  const dateGranularityRegex = {
    "YEARLY": [/^([0-9]{4})$/im, "$10101"],
    "MONTHLY": [/^([0-9]{4})-?M([0-9]{2})$/im, "$1$201"],
    //"QUARTERLY": [/^([0-9]{4})Q([0-9])$/im, "$1$2"],
    "QUARTERLY": [/^([0-9]{4})-?Q([0-4])$/im, null, date => date.substring(0, 4) + strPad(""+(((parseInt(date.substring(date.length-1))-1)*3) +1), 2, "0") + "01"],
    "BIYEARLY": [/^([0-9]{4})-?H([0-9])$/im, null, date => date.substring(0, 4) + strPad(""+(parseInt(date.substring(date.length-1))*6), 2, "0") + "01"],
    "DAILY": [/^([0-9]{6})$/im, "$1"], // TODO: translate to YEAR_MONTH_DAY
    "WEEKLY": [/^([0-9]{4})W([0-9]{2})$/im, null, date => {
      const year = date.substring(0, 4);
      const day = parseInt(date.substring(5, 2))*7;
      const parsed = new Date(year, "", day + 1);
      return year + strPad("" + (date.getMonth()), 2, "0") + strPad(""+date.getDate(), 2, "0");
    }],
  };

  const placeGranularityRegex = {
    "COUNTRY": [/^([A-Z]{2})$/im], //TODO: confirmar
    "REGIONS": [/^([A-Z]{2}[0-9]{2})$/im],
    "PROVINCES": [/^([A-Z]{2}[0-9]{3})$/im],
    "COUNTIES": [/^([A-Z]{2}[0-9]{3}[A-Z][0-9]{2})$/im],
    "MUNICIPALITIES": [/^([0-9]{5})$/im]
  };

  this.normalize = function(id) {
    return id.replace(/[^a-zA-Z0-9]/gi, '_');
  }

  this.getUrl = function(configParams) {
    return encodeURI(configParams.inputUrl);
  }
  
  this.getDateGranularity = function(date) {
    for(let granularity of Object.keys(dateGranularityRegex)) {
      if(dateGranularityRegex[granularity][0].test(date)) {
        return granularity;
      }
    }
    return null;
  }
  
  this.getPlaceGranularity = function(place) {
    for(let granularity of Object.keys(placeGranularityRegex)) {
      if(placeGranularityRegex[granularity][0].test(place)) {
        return granularity;
      }
    }
    return place.length.toString();
  }
  
  this.recodeDate = function(date, granularity) {
    if(granularity && dateGranularityRegex[granularity][0].test(date)) {
      if(dateGranularityRegex[granularity][1]) {
        return date.replace(dateGranularityRegex[granularity][0], dateGranularityRegex[granularity][1]);
      } else if(dateGranularityRegex[granularity][2]) {
        return dateGranularityRegex[granularity][2](date);
      } else {
        return date;
      }
    } else {
      granularity = this.getDateGranularity(date);
      if(granularity) {
        return this.recodeDate(date, granularity);
      } else {
        return date;
      }
    }
  }
  
  this.getColNameAndId = function(response, configParams) {
    let col = {};
    switch (configParams.inputType) {
      // case "indicatorSelector":
      //   col = { id: response.id, name: response.title.es };
      //   break;
      // case "indicatorInstanceSelector":
      //   if (configParams.measureColumns) {
      //     col = { id: 'indicator_id', name: response.subjectCode };
      //   } else {
      //     col = { id: 'indicator_id', name: response.title.es };
      //   }
      //   break;
      case "inputUrlLegacySelector":
      case "inputUrlSelector":
        if (configParams.inputUrl.indexOf("/api/indicators/v1.0/indicators/") > -1) {
          col = { id: response.id, name: response.title.es };
        } else if (configParams.inputUrl.indexOf("/api/indicators/v1.0/indicatorsSystems/") > -1) {
          if (configParams.measureColumns) {
            col = { id: 'indicator_id', name: response.subjectCode };
          } else {
            col = { id: 'indicator_id', name: response.title.es };
          }
        }
        break;
      default:
        col = undefined;
        break;
    }
    return col;
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
  exports["default"] = LegacyUtils;
}
