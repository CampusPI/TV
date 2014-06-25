'use strict';

angular.module('tvApp').directive('article', function($window, $timeout) {
  return function (scope) {
    function goNext(){
      scope.next();
    }

    $timeout(goNext, 2000);
  };
});
