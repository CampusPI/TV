'use strict';

angular.module('tvApp').factory('BroadcastService', function ($http, endpoint) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/broadcast'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
