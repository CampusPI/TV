'use strict';

angular.module('tvApp').directive('anini', function() {
  return function(scope, elem) {
    console.log(elem);
    scope.$watch('biblio.image', function() {
      $(elem).delay(100).queue(function(next) {
        $(this).removeClass('bounceOut').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass('animated bounceIn').delay(8000).queue(function(next){
            $(this).addClass('animated bounceOut');
            next();
          });
        });
        next();
      });
    });
    $('.newsDefault').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated fadeInDown').delay(9000).queue(function(next){
        $(this).addClass('animated fadeOutUp');
        next();
      });
    });
  };
});
