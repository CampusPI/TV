'use strict';

angular.module('tvApp').controller('BroadcastCtrl', function ($scope, BroadcastService, $timeout) {
  $scope.message = BroadcastService.get()[0];
  var countUp = function(){$scope.message = BroadcastService.get()[1];};
  $timeout(countUp,2000);
});
