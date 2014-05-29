'use strict';

angular.module('tvApp').controller('ContentCtrl', function ($scope, ContentService, $timeout) {

  var n = 0;
  var d;

  ContentService.get().then(function(data){
    d = data;
    prepare();
  });

  var prepare = function() {
    $scope.title = d[0].type;
    $scope.name = d[0].content[n].name;
    $scope.sopa = d[0].content[n].Sopa;
    $scope.prato = d[0].content[n]['Prato(s) do dia'];
    $scope.sobre = d[0].content[n].Sobremesas;
    if (n > d.length-1) {
      n = 0;
    }
    else {
      n++;
    }
    $timeout(prepare, 4000);
  };
});
