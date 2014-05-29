'use strict';

angular.module('tvApp').directive('youtube', function() {
  return function (scope, element) {
    scope.$watch('id', function() {

      var el = $('<iframe id="vidz" src="//www.youtube.com/embed/'+scope.id+'?end=100&modestbranding=0&autoplay=1&controls=0&showinfo=0&enablejsapi=1&rel=0" frameborder="0"></iframe>');
      el.bind( 'onStateChange', function() {
        console.log( 'User clicked on foo.');
      });

      element.html('').append(el);

    });
  };
});
