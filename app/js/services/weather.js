'use strict';

angular.module('tvApp').factory('WeatherService', function () {
  return{
    getWeather: function() {
      return {
        temp: 23,
        state: 'sunny'
      };
    }
  };
});
