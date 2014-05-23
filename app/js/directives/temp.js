'use strict';

angular.module('tvApp').directive('temp', function() {
  return function (scope, element) {
    var color = function() {
      if (scope.weather) {
        if (scope.weather.temp < 20) {
          element.addClass('color-blue');
        }
        else if (scope.weather.temp < 27) {
          element.addClass('color-yellow');
        }
        else {
          element.addClass('color-red');
        }
      }
    };

    scope.$watch('weather', function() {
      color();
    });
  };
});
