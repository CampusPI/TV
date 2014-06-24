'use strict';

angular.module('tvApp').controller('ScheduleCtrl', function ($scope, ScheduleService) {

  var currVideo = 0;
  var currArticle = 0;
  var currType = null;

  ScheduleService.get().then(function(data){
    $scope.schedule = data;
    $scope.videos = [];
    $scope.articles = [];
    //$scope.video = null;
    //$scope.article = null;
    $scope.currType = null;
    $scope.schedule.forEach(function(entry){
      if(entry.type === 'video') {
        $scope.videos.push(entry);
      }
      else {
        $scope.articles.push(entry);
      }
    });
    //console.log($scope.videos);
    //console.log("");
    //console.log($scope.articles);
    getcurr();
  });

  $scope.next = function() {
    getcurr();
  };

  var getcurr = function() {
      //if(Math.floor((Math.random() * 100) + 1) > 50){
      $scope.currType = 'video';
      $scope.video = $scope.videos[currVideo];
      if (currVideo === $scope.videos.length-1) {
        currVideo=0;
      }
      else {
        currVideo++;
      }
    //}
    /*else{
      $scope.currType = 'article';
      $scope.article = $scope.articles[currArticle];
      if (currArticle === $scope.articles.length-1) {
        currArticle=0;
      }
      else {
        currArticle++;
      }
    }*/

    /*$scope.title = $scope.videos[curr].name;
    $scope.id = $scope.videos[curr].videoId;
    if (curr === $scope.videos.length-1) {
      curr=0;
    }
    else {
      curr++;
    }*/
  };

});
