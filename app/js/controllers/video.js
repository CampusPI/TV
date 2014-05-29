'use strict';

angular.module('tvApp').controller('VideoCtrl', function ($scope, VideosService) {

  var curr = 0;

  VideosService.get().then(function(data){
    $scope.videos = data;
    getcurr();
  });

  $scope.next = function() {
    getcurr();
  };

  var getcurr = function() {
    console.log('new');
    $scope.title = $scope.videos[curr].name;
    $scope.id = $scope.videos[curr].id;
    if (curr === $scope.videos.length-1) {
      curr=0;
    }
    else {
      curr++;
    }
  };

});
