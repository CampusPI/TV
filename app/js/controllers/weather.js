'use strict';

angular.module('tvApp').controller('WeatherCtrl', function ($scope, WeatherService) {
  $scope.weather = WeatherService.getWeather();
});
