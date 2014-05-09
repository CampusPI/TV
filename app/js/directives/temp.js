'use strict';

angular.module('tvApp').directive('temp', function() {
  return function (scope, element) {
    if (scope.weather.temp < 20) {
      element.addClass('color-blue');
    }
    else if (scope.weather.temp < 27) {
      element.addClass('color-yellow');
    }
    else {
      element.addClass('color-red');
    }
  };
});
