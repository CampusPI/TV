'use strict';

angular.module('tvApp').controller('BroadcastCtrl', function ($scope, BroadcastService) {

  $scope.counter = 0;

  var getData = function() {
    BroadcastService.get().then(function(data){
      $scope.all = data;
      $scope.next();
    });
  };

  $scope.next = function() {
    if ($scope.all.length === 0) {
      // Se o servidor nao tiver avisos, esperar 2 minutos e tentar outra vez
      setTimeout(getData, 2*60*1000);
    }
    else if ($scope.counter < $scope.all.length) {
      $scope.message = $scope.all[$scope.counter];
      $scope.counter++;
      if(!$scope.$$phase) {
        $scope.$digest();
      }
    }
    else {
      $scope.counter = 0;
      getData();
    }
  };

  getData();

});
