'use strict';

angular.module('tvApp').directive('animfade', function($timeout) {
  return function(scope, elem) {

    var ignore = true;

    scope.$watch('trigger', function () {
      if (ignore) {
        $timeout(anim, 4000);
        ignore = !ignore;
      }
    });

    var anim = function() {
      setInterval(function () {
        $(elem).fadeOut(1000).fadeIn(2000);
      },5000);
    };
  };
});
