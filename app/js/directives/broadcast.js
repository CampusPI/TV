'use strict';
var colors = {
  Importante: 'red',
  Informação: 'blue',
  Greve: 'green'
};
angular.module('tvApp').directive('broadcast', function() {
  return function(scope, element) {
    var count = 0;
    scope.$watch('message', function () {
      $('.texto').html('').unbind('finished');
      count = 0;
      create();
    });
    var create = function() {
      scope.color = colors[scope.message.type];
      element.html(scope.message.text);
      $('.texto').marquee().bind('finished', function(){
        scope.next();
      });
    };
  };
});
