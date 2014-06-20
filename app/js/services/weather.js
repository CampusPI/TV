'use strict';

angular.module('tvApp').factory('WeatherService', function ($http, endpoint) {
  return{
    getWeather: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/weather'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
