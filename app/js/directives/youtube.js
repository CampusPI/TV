'use strict';

angular.module('tvApp').directive('youtube', function($window) {
  return function (scope) {

    var player;

    function newPlaya() {
      player = new YT.Player('player', {
        videoId: scope.video.videoId,
        playerVars: {
          'autoplay': 1,
          'showinfo': 0,
          'controls': 1,
          'rel': 0,
          'end': 30
        },
        events: {
          'onStateChange': onPlayerStateChange,
          'onReady': onPlayerReady
        }
      });
    }

    scope.$watch('video', function() {
      if ($('.video').html().trim() !== '<div id="player"></div>') {
        $('.video').html('<div id="player"></div>');
        newPlaya();
      }
      else{
        newPlaya();
      }
    });

    function onPlayerReady(event) {
      $('.title').text(scope.video.name);
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if (event.data === 0) {
        $('.title').text('');
        $('.video').html('<p class="logo animated tada valign">Campus<span>TV</span></p>');
        scope.next();
      }
    }
  };
});
