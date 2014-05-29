'use strict';

angular.module('tvApp').controller('VideoCtrl', function ($scope, VideosService) {

  VideosService.get().then(function(data){
    $scope.videos = data;
    //TEST
    $scope.title = data[1].name;
    $scope.id = data[1].id;
  });

});
