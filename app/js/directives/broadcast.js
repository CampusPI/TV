'use strict';

angular.module('tvApp').directive('broadcast', function() {
  return function(scope, element) {

    var colors = {
      Importante: 'red',
      Informação: 'blue',
      Greve: 'green'
    };

    var count = 0;
    scope.$watch('message', function () {
      if (scope.message) {
        $('.texto').html('').unbind('finished');
        count = 0;
        create();
      }
    });
    var create = function() {
      scope.color = colors[scope.message.type];
      console.log(scope.message.type);
      element.html(scope.message.text);
      $('.texto').marquee().bind('finished', function(){
        scope.next();
      });
    };
  };
});
