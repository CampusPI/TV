'use strict';

angular.module('tvApp').controller('ScheduleCtrl', function ($scope, ScheduleService, $timeout) {

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
    switch (elem.type) {
    case 'video':
      $scope.video = elem;
      break;
    case 'new':
      $scope.article = elem;
      $timeout(getcurr, 11000);
      break;
    case 'biblio':
      $scope.biblio = elem;
      $timeout(getcurr, 11000);
      break;
    }
    c++;
  };

  $scope.next = getcurr;

});
