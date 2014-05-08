'use strict';

angular.module('tvApp').directive('svg', function($http) {
  return function (scope, element, attrs) {
    $http({method: 'GET', url: attrs.data}).
    success(function(data) {
      element[0].outerHTML = data;
    });
  };
});
