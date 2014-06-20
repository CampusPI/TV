'use strict';

angular.module('tvApp').factory('VideosService', function ($http) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/tv/schedule'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
