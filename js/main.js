"use strict";angular.module("tvApp",["ngResource"]),angular.module("tvApp").controller("MainCtrl",function($scope){$scope.dummy=[1,2,3]}),angular.module("tvApp").controller("WeatherCtrl",function($scope,$timeout,$http,WeatherService){var update=1;!function tick(){WeatherService.getWeather().then(function(data){JSON.stringify($scope.weather)!==JSON.stringify(data)&&($scope.weather=data),$timeout(tick,60*update*1e3)})}()}),angular.module("tvApp").controller("BroadcastCtrl",function($scope,BroadcastService){BroadcastService.get().then(function(data){$scope.all=data,$scope.next()}),$scope.counter=0,$scope.next=function(){$scope.counter<$scope.all.length?($scope.message=$scope.all[$scope.counter],$scope.counter++,$scope.$$phase||$scope.$digest()):($scope.counter=0,BroadcastService.get().then(function(data){$scope.all=data,$scope.next()}))}}),angular.module("tvApp").controller("ContentCtrl",function($scope,ContentService){ContentService.get().then(function(data){prepare(data)});var prepare=function(data){$scope.title=data[0].type,$scope.name=data[0].content[0].name,$scope.sopa=data[0].content[0].Sopa,$scope.prato=data[0].content[0]["Prato(s) do dia"],$scope.sobre=data[0].content[0].Sobremesas}}),angular.module("tvApp").factory("WeatherService",function($http){return{getWeather:function(){return $http({method:"GET",url:"http://localhost:8080/api/tv/weather"}).then(function(response){return response.data})}}}),angular.module("tvApp").factory("BroadcastService",function($http){return{get:function(){return $http({method:"GET",url:"http://localhost:8080/api/tv/broadcast"}).then(function(response){return response.data})}}}),angular.module("tvApp").factory("ContentService",function($http){return{get:function(){return $http({method:"GET",url:"http://localhost:8080/api/tv/content"}).then(function(response){return response.data})}}}),angular.module("tvApp").directive("time",function(){return function(scope,element,attrs){"hours"===attrs.type&&setInterval(function(){var hours=(new Date).getHours();element.html((10>hours?"0":"")+hours)},1e3),"minutes"===attrs.type&&setInterval(function(){var minutes=(new Date).getMinutes();element.html((10>minutes?"0":"")+minutes)},1e3)}}),angular.module("tvApp").directive("svg",function($http){return function(scope,element,attrs){var icon=function(){scope.weather&&$http({method:"GET",url:attrs.data}).success(function(data){element[0].outerHTML=data})};scope.$watch("weather",function(){icon()})}}),angular.module("tvApp").directive("temp",function(){return function(scope,element){var color=function(){scope.weather&&element.addClass(scope.weather.temp<20?"color-blue":scope.weather.temp<27?"color-yellow":"color-red")};scope.$watch("weather",function(){color()})}}),angular.module("tvApp").directive("broadcast",function(){return function(scope,element){var colors={Importante:"red",Informação:"blue",Greve:"green"},count=0;scope.$watch("message",function(){scope.message&&($(".texto").html("").unbind("finished"),count=0,create())});var create=function(){scope.color=colors[scope.message.type],console.log(scope.message.type),element.html(scope.message.text),$(".texto").marquee().bind("finished",function(){scope.next()})}}}),angular.module("tvApp").directive("colortag",function(){return function(scope){var colors={Ementas:"yellow",Transportes:"green"};scope.$watch("title",function(){scope.color=colors[scope.title]})}}),angular.module("tvApp").directive("rep",function($parse){return function(scope,element,attrs){scope.$watch("name",function(){var data=$parse(attrs.rep)(scope);data&&element.append(data.join("<br />"))})}}),angular.module("tvApp").filter("weatherIcon",function(){var states={chanceflurries:null,chancerain:null,chancesleet:null,chancesnow:null,chancetstorms:null,clear:"sun",cloudy:"cloud",flurries:"cloudHailAlt",fog:"cloudFog",hazy:"cloudFogSun",mostlycloudy:"cloudSun",mostlysunny:"cloudSun",partlycloudy:"cloudSun",partlysunny:"cloudSun",sleet:"cloudHailAlt",rain:"cloudRain",snow:"cloudSnowAlt",sunny:"sun",tstorms:"cloudLightning",unknown:"cloudLightning"};return function(input){return states[input]}});