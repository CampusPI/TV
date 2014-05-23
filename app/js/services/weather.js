'use strict';

angular.module('tvApp').factory('WeatherService', function ($http) {
  return{
    getWeather: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/tv/weather'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
