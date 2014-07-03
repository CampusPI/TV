'use strict';

angular.module('tvApp').controller('ScheduleCtrl', function ($scope, ScheduleService, $timeout, $http, endpoint) {

  var c = 0;

  ScheduleService.get().then(function(data){
    $scope.schedule = data;
    getcurr();
  });

  var getcurr = function() {
    if (c === $scope.schedule.length) {
      c = 0;
    }
    var elem = $scope.schedule[c];
    $scope.currType = elem.type;
    $http.post(endpoint+'/api/tv/currentContent', elem).success(function(){

    });

    switch (elem.type) {
    case 'video':
      c++; getcurr();
      // $scope.video = elem;
      // break;
    case 'new':
      $scope.article = elem;
      $timeout(getcurr, 11000);
      break;
    case 'biblio':
      c++; getcurr();
      // $scope.biblio = elem;
      // $timeout(getcurr, 11000);
      // break;
    }
    c++;
  };

  $scope.next = getcurr;

});
