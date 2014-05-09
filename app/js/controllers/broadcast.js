'use strict';

angular.module('tvApp').controller('BroadcastCtrl', function ($scope, BroadcastService) {
  $scope.message = BroadcastService.get()[0];
});
