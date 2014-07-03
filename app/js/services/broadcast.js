'use strict';

angular.module('tvApp').factory('BroadcastService', function ($http, endpoint) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/broadcasts'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
