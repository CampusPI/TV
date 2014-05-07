'use strict';

angular.module('tvApp').directive('time', function() {
  return function (scope, element, attrs) {
    if (attrs.type === 'hours') {
      setInterval( function() {
        var hours = new Date().getHours();
        element.html(( hours < 10 ? '0' : '' ) + hours);
      }, 1000);
    }
    if (attrs.type === 'minutes') {
      setInterval( function() {
        var minutes = new Date().getMinutes();
        element.html(( minutes < 10 ? '0' : '' ) + minutes);
      },1000);
    }
  };
});
