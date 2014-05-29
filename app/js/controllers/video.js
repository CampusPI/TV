'use strict';

angular.module('tvApp').controller('VideoCtrl', function ($scope, VideosService) {

  VideosService.get().then(function(data){
    $scope.videos = data;
    //TEST
    $scope.title = data[0].name;
    $scope.id = data[0].id;
  });

});
