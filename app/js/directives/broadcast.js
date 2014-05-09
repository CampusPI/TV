'use strict';
var colors = {
  Importante: 'red',
  Informação: 'blue',
  Greve: 'green'
};
angular.module('tvApp').directive('broadcast', function() {
  return function(scope, element) {
    scope.color = colors[scope.message.type];
    element.html(scope.message.text);
    $('.texto').marquee();
  };
});
