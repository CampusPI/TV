'use strict';

angular.module('tvApp').factory('BroadcastService', function () {
  return {
    get: function() {
      return [
        {
          priority: 0,
          type: '',
          text: ''
        }
      ];
    }
  };
});
