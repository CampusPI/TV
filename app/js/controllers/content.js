'use strict';

angular.module('tvApp').controller('ContentCtrl', function ($scope, ContentService) {

  ContentService.get().then(function(data){
    prepare(data);
  });

  var prepare = function(data) {
    $scope.title = data[0].type;
    $scope.name = data[0].content[0].name;
    $scope.sopa = data[0].content[0].Sopa;
    $scope.prato = data[0].content[0]['Prato(s) do dia'];
    $scope.sobre = data[0].content[0].Sobremesas;
  };
});
