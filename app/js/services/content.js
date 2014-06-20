'use strict';

angular.module('tvApp').factory('ContentService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/content'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
