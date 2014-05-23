'use strict';

angular.module('tvApp').controller('BroadcastCtrl', function ($scope, BroadcastService) {

  BroadcastService.get().then(function(data){
    $scope.all = data;
    $scope.next();
  });

  $scope.counter = 0;

  $scope.next = function() {
    if ($scope.counter < $scope.all.length) {
      $scope.message = $scope.all[$scope.counter];
      $scope.counter++;
      if(!$scope.$$phase) {
        $scope.$digest();
      }
    }
    else {
      $scope.counter = 0;
      BroadcastService.get().then(function(data){
        $scope.all = data;
        $scope.next();
      });
    }
  };

});
