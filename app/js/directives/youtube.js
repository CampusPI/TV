'use strict';

angular.module('tvApp').directive('youtube', function($window) {
  return function (scope) {
    scope.$watch('id', function() {

      if ($('.video').html().trim() !== '<div id="player"></div>') {
        $('.video').html('<div id="player"></div>');
        newPlaya();
      }

      var player;

      $window.onYouTubeIframeAPIReady = function () {
        newPlaya();
      };

      function newPlaya() {
        player = new YT.Player('player', {
          videoId: scope.id,
          playerVars: {
            'autoplay': 1,
            'controls': 1,
            'modestbranding': 0,
            'showinfo': 0,
            'rel': 0
          },
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      };

      function onPlayerStateChange(event) {
        console.log(event.data);
        if (event.data === 0) {
          scope.next();
        }
      }
    });
  };
});
