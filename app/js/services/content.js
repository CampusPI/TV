'use strict';

angular.module('tvApp').factory('ContentService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/sidebar'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
