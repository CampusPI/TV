'use strict';

angular.module('tvApp').controller('ContentCtrl', function ($scope, ContentService, $timeout) {

  var n = 0;
  var d;

  var ni = 0;
  var k = 0;

  //$scope.trigger = false;
  var get = function() {
    ContentService.get().then(function(data){
      d = data;
      prepare();
    });
  };

  var prepare = function() {
    $scope.trigger = !$scope.trigger || false;
    $scope.title = d[n].name;
    if ($scope.title === 'Ementas') {
      $scope.name = d[n].content[ni].ementa.Nome;
      $scope.data = d[n].content[ni].ementa;
      delete $scope.data.Nome;
      if (ni > d[n].content.length-2) {
        if (n > d.length-2) {
          n = 0;
        }
        else {
          n++;
        }
        ni = 0;
        $timeout(get, 7000);
      }
      else {
        ni++;
        $timeout(prepare, 7000);
      }
    }
    else {
      $scope.name = d[n].content[ni].type;
      $scope.name = d[n].content[ni].type + ' ('+d[n].content[ni].content[k].name+')';
      $scope.data = d[n].content[ni].content[k].content;
      if (k > d[n].content[ni].content.length-2) {
        k = 0;
        if (ni > d[n].content.length-2) {
          ni = 0;
          if (n > d.length-2) {
            n = 0;
          }
          else {
            n++;
          }
        }
        else {
          ni++;
        }
        $timeout(get, 7000);
      }
      else {
        k++;
        $timeout(prepare, 7000);
      }
    }
  };
  get();
});
