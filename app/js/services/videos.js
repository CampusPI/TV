'use strict';

angular.module('tvApp').factory('VideosService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/videos'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
