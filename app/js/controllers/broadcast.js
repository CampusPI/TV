'use strict';

angular.module('tvApp').controller('BroadcastCtrl', function ($scope, BroadcastService) {
  $scope.counter = 0;
  $scope.all = BroadcastService.get();
  $scope.next = function() {
    if ($scope.counter < $scope.all.length) {
      console.log('next ', $scope.counter);
      $scope.message = $scope.all[$scope.counter];
      $scope.$apply();
      console.log('mudou: ',$scope.message);
      $scope.counter++;
    }
    else {
      $scope.counter = 0;
      $scope.all = BroadcastService.get();
      $scope.next();
    }
  };

  $scope.next();


});
