"use strict";angular.module("tvApp",["ngResource"]),angular.module("tvApp").constant("endpoint","http://server.pi.campinhos.pt"),angular.module("tvApp").controller("MainCtrl",function($scope){$scope.dummy=[1,2,3]}),angular.module("tvApp").controller("WeatherCtrl",function($scope,$timeout,$http,WeatherService){var update=1;!function tick(){WeatherService.getWeather().then(function(data){JSON.stringify($scope.weather)!==JSON.stringify(data)&&($scope.weather=data),$timeout(tick,60*update*1e3)})}()}),angular.module("tvApp").controller("BroadcastCtrl",function($scope,BroadcastService){$scope.counter=0;var getData=function(){BroadcastService.get().then(function(data){$scope.all=data,$scope.next()})};$scope.next=function(){0===$scope.all.length?setTimeout(getData,12e4):$scope.counter<$scope.all.length?($scope.message=$scope.all[$scope.counter],$scope.counter++,$scope.$$phase||$scope.$digest()):($scope.counter=0,getData())},getData()}),angular.module("tvApp").controller("ContentCtrl",function($scope,ContentService,$timeout){var d,n=0,ni=0,k=0,get=function(){ContentService.get().then(function(data){d=data,prepare()})},prepare=function(){$scope.trigger=!$scope.trigger||!1,$scope.title=d[n].name,"Ementas"===$scope.title?($scope.name=d[n].content[ni].ementa.Nome,$scope.data=d[n].content[ni].ementa,delete $scope.data.Nome,ni>d[n].content.length-2?(n>d.length-2?n=0:n++,ni=0,$timeout(get,7e3)):(ni++,$timeout(prepare,7e3))):($scope.name=d[n].content[ni].type,$scope.name=d[n].content[ni].type+" ("+d[n].content[ni].content[k].name+")",$scope.data=d[n].content[ni].content[k].content,k>d[n].content[ni].content.length-2?(k=0,ni>d[n].content.length-2?(ni=0,n>d.length-2?n=0:n++):ni++,$timeout(get,7e3)):(k++,$timeout(prepare,7e3)))};get()}),angular.module("tvApp").controller("ScheduleCtrl",function($scope,ScheduleService,$timeout,$http){var c=0;ScheduleService.get().then(function(data){$scope.schedule=data,getcurr()});var getcurr=function(){c===$scope.schedule.length&&(c=0);var elem=$scope.schedule[c];switch($scope.currType=elem.type,$http.post("http://server.pi.campinhos.pt/api/tv/currentContent",elem).success(function(){}),elem.type){case"video":$scope.video=elem;break;case"new":$scope.article=elem,$timeout(getcurr,11e3);break;case"biblio":$scope.biblio=elem,$timeout(getcurr,11e3)}c++};$scope.next=getcurr}),angular.module("tvApp").factory("WeatherService",function($http,endpoint){return{getWeather:function(){return $http({method:"GET",url:endpoint+"/api/tv/weather"}).then(function(response){return response.data})}}}),angular.module("tvApp").factory("BroadcastService",function($http,endpoint){return{get:function(){return $http({method:"GET",url:endpoint+"/api/tv/strikes"}).then(function(response){return response.data})}}}),angular.module("tvApp").factory("ContentService",function($http,endpoint){return{get:function(){return $http({method:"GET",url:endpoint+"/api/tv/sidebar"}).then(function(response){return response.data})}}}),angular.module("tvApp").factory("ScheduleService",function($http,endpoint){return{get:function(){return $http({method:"GET",url:endpoint+"/api/tv/schedule"}).then(function(response){return response.data})}}}),angular.module("tvApp").directive("time",function(){return function(scope,element,attrs){"hours"===attrs.type&&setInterval(function(){var hours=(new Date).getHours();element.html((10>hours?"0":"")+hours)},1e3),"minutes"===attrs.type&&setInterval(function(){var minutes=(new Date).getMinutes();element.html((10>minutes?"0":"")+minutes)},1e3)}}),angular.module("tvApp").directive("svg",function($http){return function(scope,element,attrs){var icon=function(){scope.weather&&$http({method:"GET",url:attrs.data}).success(function(data){element[0].outerHTML=data})};scope.$watch("weather",function(){icon()})}}),angular.module("tvApp").directive("temp",function(){return function(scope,element){var color=function(){scope.weather&&element.addClass(scope.weather.temp<20?"color-blue":scope.weather.temp<27?"color-yellow":"color-red")};scope.$watch("weather",function(){color()})}}),angular.module("tvApp").directive("broadcast",function(){return function(scope,element){var colors={Importante:"red","Informação":"blue",Greve:"green"},count=0;scope.$watch("message",function(){scope.message&&($(".texto").html("").unbind("finished"),count=0,create())});var create=function(){scope.color=colors[scope.message.type],element.html(scope.message.text),$(".texto").marquee().bind("finished",function(){scope.next()})}}}),angular.module("tvApp").directive("colortag",function(){return function(scope){var colors={Ementas:"yellow",Transportes:"green"};scope.$watch("title",function(){scope.color=colors[scope.title]})}}),angular.module("tvApp").directive("youtube",function($window){return function(scope){function newPlaya(){player=new YT.Player("player",{videoId:scope.video.videoId,playerVars:{autoplay:1,modestbranding:0,showinfo:0,rel:0,end:20},events:{onStateChange:onPlayerStateChange}})}function onPlayerStateChange(event){0===event.data&&scope.next()}scope.$watch("video",function(){'<div id="player"></div>'!==$(".video").html().trim()&&($(".video").html('<div id="player"></div>'),newPlaya())});var player;$window.onYouTubeIframeAPIReady=function(){newPlaya()}}}),angular.module("tvApp").directive("animinus",function(){return function(scope,elem){var a=function(){$(elem).animate({width:"0%"},7e3,function(){$(elem).attr("style","")})};scope.$watch("trigger",function(){a()})}}),angular.module("tvApp").directive("animfade",function($timeout){return function(scope,elem){var ignore=!0;scope.$watch("trigger",function(){ignore&&($timeout(anim,6e3),ignore=!ignore,$timeout(function(){$(elem).fadeOut(1e3).fadeIn(2e3)},6e3))});var anim=function(){setInterval(function(){$(elem).fadeOut(1e3).fadeIn(2e3)},7e3)}}}),angular.module("tvApp").directive("anini",function(){return function(scope,elem){console.log(elem),scope.$watch("biblio.image",function(){$(elem).delay(100).queue(function(next){$(this).removeClass("bounceOut").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated bounceIn").delay(8e3).queue(function(next){$(this).addClass("animated bounceOut"),next()})}),next()})}),$(".newsDefault").addClass("animated fadeInDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated fadeInDown").delay(9e3).queue(function(next){$(this).addClass("animated fadeOutUp"),next()})})}}),angular.module("tvApp").filter("weatherIcon",function(){var states={chanceflurries:null,chancerain:null,chancesleet:null,chancesnow:null,chancetstorms:null,clear:"sun",cloudy:"cloud",flurries:"cloudHailAlt",fog:"cloudFog",hazy:"cloudFogSun",mostlycloudy:"cloudSun",mostlysunny:"cloudSun",partlycloudy:"cloudSun",partlysunny:"cloudSun",sleet:"cloudHailAlt",rain:"cloudRain",snow:"cloudSnowAlt",sunny:"sun",tstorms:"cloudLightning",unknown:"cloudLightning"};return function(input){return states[input]}});