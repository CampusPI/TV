'use strict';

angular.module('tvApp').directive('youtube', function($window) {
  return function (scope) {

    function newPlaya() {
      scope.$watch('video', function() {
        console.log(scope.video);
        player = new YT.Player('player', {
          videoId: scope.video.videoId,
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
      });
    }

    scope.$watch('video', function() {
      if ($('.video').html().trim() !== '<div id="player"></div>') {
        $('.video').html('<div id="player"></div>');
        newPlaya();
      }
    });


    var player;

    $window.onYouTubeIframeAPIReady = function () {
      newPlaya();
    };

    function onPlayerStateChange(event) {
      console.log(event.data);
      if (event.data === 0) {
        scope.next();
      }
    }
  };
});
