'use strict';


angular.module('tvApp').directive('rep', function($parse) {
  return function(scope, element, attrs) {
    scope.$watch('name', function () {
      var data = $parse(attrs.rep)(scope);
      if(data){
        element.html('').append(data.join('<br />'));
      }
    });
  };
});
