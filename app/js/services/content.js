'use strict';

angular.module('tvApp').factory('ContentService', function ($http) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/tv/content'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
