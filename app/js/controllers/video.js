'use strict';

angular.module('tvApp').controller('ScheduleCtrl', function ($scope, ScheduleService, $timeout) {

  var currVideo = 0;
  var currArticle = 0;
  var currBiblio = 0;
  var currType = null;

  ScheduleService.get().then(function(data){
    $scope.schedule = data;
    $scope.videos = [];
    $scope.articles = [];
    $scope.biblios = [];
    //$scope.video = null;
    $scope.article = null;
    $scope.article2 = null;
    $scope.biblio = null;
    $scope.currType = null;
    $scope.schedule.forEach(function(entry){
      if(entry.type === 'video') {
        $scope.videos.push(entry);
      }
      else if(entry.type === 'new') {
        $scope.articles.push(entry);
      }
      else if(entry.type === 'biblio'){
        $scope.biblios.push(entry);
      }
    });
    // console.log($scope.videos);
    //console.log("");
    //console.log($scope.articles);
    getcurr();
  });

  $scope.next = function() {
    getcurr();
  };

  var getcurr = function() {
    /*if(Math.floor((Math.random() * 100) + 1) > 50){
      $scope.currType = 'video';
      $scope.video = $scope.videos[currVideo];
      if (currVideo === $scope.videos.length-1) {
        currVideo=0;
      }
      else {
        currVideo++;
      }
    }
    else if(Math.floor((Math.random() * 100) + 1) < 33){
      $scope.currType = 'article';
      $scope.article = $scope.articles[currArticle];
      $scope.article2 = $scope.articles[currArticle+1];
          //console.log("ceanceasnceasda");

          if (currArticle+1 === $scope.articles.length - 1) {
            currArticle = 0;
          }
          else {
            currArticle++;
          }
          $timeout(getcurr, 11000);
    }*/
    //else{
      $scope.currType = 'biblio';
      $scope.biblio = $scope.biblios[currBiblio];
          //console.log("ceanceasnceasda");

          if (currBiblio+1 === $scope.biblios.length - 1) {
            currBiblio = 0;
          }
          else {
            currBiblio++;
          }
          $timeout(getcurr, 11000);
    //}
  };

});
