'use strict';

angular.module('tvApp').directive('svg', function($http) {
  return function (scope, element, attrs) {
    var icon = function() {
      if (scope.weather) {
        $http({method: 'GET', url: attrs.data})
        .success(function(data) {
          element[0].outerHTML = data;
        });
      }
    };

    scope.$watch('weather', function() {
      icon();
    });
  };
});
