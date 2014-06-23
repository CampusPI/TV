'use strict';

angular.module('tvApp').controller('ContentCtrl', function ($scope, ContentService, $timeout) {

  var n = 0;
  var d;

  var ni = 0;

  //$scope.trigger = false;
  var get = function() {
    ContentService.get().then(function(data){
      d = data;
      prepare();
    });
  };

  var prepare = function() {
    $scope.trigger = !$scope.trigger || false;
    $scope.name = d[0].content[ni].name;
    $scope.title = d[0].type;
    $scope.data = d[0].content[ni];
    delete $scope.data.name;
    if (n > d.length-1) {
      n = 0;
      ni = 0;
      $timeout(get, 5000);
    }
    else {
      n++;
      ni++;
      $timeout(prepare, 5000);
    }
  };

  get();
});
