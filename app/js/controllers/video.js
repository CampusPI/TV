'use strict';

angular.module('tvApp').controller('ScheduleCtrl', function ($scope, ScheduleService, $timeout) {

  var currVideo = 0;
  var currArticle = 0;
  var currBiblio = 0;
  var currType = null;
  var hardCoded = 1;

  ScheduleService.get().then(function(data){
    $scope.schedule = data;
    console.log(data);
    $scope.videos = [];
    $scope.articles = [];
    $scope.biblios = [];
    $scope.video = null;
    // $scope.article = null;
    // $scope.article2 = null;
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
    getcurr();
  });

  $scope.next = function() {
    getcurr();
  };

  var getcurr = function() {
    if(hardCoded===0){ //video
      $scope.currType = 'video';
      $scope.video = $scope.videos[currVideo];
      if (currVideo === $scope.videos.length-1) {
        currVideo=0;
      }
      else {
        currVideo++;
      }
      hardCoded = 1;
    }
    // else if(hardCoded === 1){
    //   $scope.currType = 'article';
    //   $scope.article = $scope.articles[currArticle];
    //   $scope.article2 = $scope.articles[currArticle+1];
    //       if (currArticle+1 === $scope.articles.length - 1) {
    //         currArticle = 0;
    //       }
    //       else {
    //         currArticle++;
    //       }
    //       $timeout(getcurr, 11000);
    // }
    else if (hardCoded === 1){
      $scope.currType = 'biblio';
      console.log($scope.biblios[currBiblio]);
      $scope.biblio = $scope.biblios[currBiblio];
          if (currBiblio === $scope.biblios.length - 1) {
            currBiblio = 0;
            hardCoded = 0;
          }
          else {
            currBiblio++;
          }
          $timeout(getcurr, 11000);
    }
  };

});
