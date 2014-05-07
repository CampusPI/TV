'use strict';

angular.module('tvApp').factory('WeatherService', function () {
  return{
    getWeather: function() {
      return {
        temp: 24,
        state: 'clear'
      };
    }
  };
});
