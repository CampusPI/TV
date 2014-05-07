'use strict';

angular.module('tvApp').factory('VideosService', function () {
  return{
    getVideos: function() {
      return [
        {
          url: 'www.cenas.com',
          title: 'Primeiro',
          hour: '',
          length: '',
          description: ''
        },
        {
          url: 'www.cenas.com',
          title: 'Segundo',
          hour: '',
          length: '',
          description: ''
        },
      ];
    }
  };
});
