'use strict';

angular.module('tvApp').directive('fadetitle', function() {
  return function(scope, elem) {
    scope.$watch('biblio.titulo', function() {
      $(elem).delay(100).queue(function(next) {
        $(this).removeClass('fadeOutUp').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass('animated fadeInDown').delay(8000).queue(function(next){
            $(this).addClass('animated fadeOutUp');
            next();
          });
        });
        next();
      });
    });
  };
});
