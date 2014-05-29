'use strict';

angular.module('tvApp').directive('youtube', function() {
  return function (scope, element) {
    scope.$watch('id', function() {

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //   after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: scope.id,
          playerVars: { 
                       'autoplay': 1, 
                       'controls': 0,
                       'modestbranding': 0,
                       'showinfo': 0,
                       'rel': 0
                      },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 30000); //para aos 30 segundos
          done = true;
        }
      }
      function onPlayerError(event) {
        if(event.data == 2) console.log("invalid id");
        else if(event.data == 100) console.log("video not found");
      }
      function stopVideo() {
        player.stopVideo();
      }

      // var el = $('<iframe id="vidz" src="//www.youtube.com/embed/'+scope.id+'?end=100&modestbranding=0&autoplay=1&controls=0&showinfo=0&enablejsapi=1&rel=0" frameborder="0"></iframe>');
      // el.bind( 'onStateChange', function() {
      //   console.log( 'User clicked on foo.');
      // });

      var el = $('player');

      element.html('').append(el);

    });
  };
});
