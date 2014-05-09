'use strict';

angular.module('tvApp').directive('broadcast', function() {
  var colors = {
    Importante: 'red',
    Informação: 'blue',
    Greve: 'green'
  };
  return {
    restrict: 'A',
    template: '<div class="label label-{{color}}"><b>{{message.type}}</b></div>' +
              '<div class="texto">{{message.text}}</div>',
    link: function (scope) {
      scope.color = colors[scope.message.type];

    }
  };
});
