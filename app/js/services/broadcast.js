'use strict';

angular.module('tvApp').factory('BroadcastService', function ($http) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/tv/strikes'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
