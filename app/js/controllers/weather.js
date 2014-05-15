'use strict';

angular.module('tvApp').controller('WeatherCtrl', function ($scope, $timeout, $http, WeatherService) {

  var update = 1; /* Actualiza o tempo de X em X minutos */

  /* GET WEATHER STATUS */
  (function tick() {
    WeatherService.getWeather().then(function(data){
      if (JSON.stringify($scope.weather) !== JSON.stringify(data) ) {
        console.log(data); /* LAZY DEBUG */
        $scope.weather = data;
      }
      $timeout(tick, update*60*1000);
    });
  })();

});
