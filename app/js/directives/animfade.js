'use strict';

angular.module('tvApp').directive('animfade', function($timeout) {
  return function(scope, elem) {

    var ignore = true;

    scope.$watch('trigger', function () {
      if (ignore) {
        $timeout(anim, 6000);
        ignore = !ignore;
        $timeout(function() {
          $(elem).fadeOut(1000).fadeIn(2000);
        }, 6000);
      }
    });

    var anim = function() {
      setInterval(function () {
        $(elem).fadeOut(1000).fadeIn(2000);
      },7000);
    };
  };
});
