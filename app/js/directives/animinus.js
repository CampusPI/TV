'use strict';

angular.module('tvApp').directive('animinus', function() {
  return function(scope, elem) {

    var a = function() {
      $(elem).animate({width: '0%'},7000, function() {
        $(elem).attr('style','');
      });
    };

    scope.$watch('trigger', function () {
      a();
    });
  };
});
