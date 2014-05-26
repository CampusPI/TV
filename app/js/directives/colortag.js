'use strict';


angular.module('tvApp').directive('colortag', function() {
  return function(scope) {
    var colors = {
      'Ementas': 'yellow',
      'Transportes': 'green'
    };
    scope.$watch('title', function () {
      scope.color = (colors[scope.title]);
    });
  };
});
