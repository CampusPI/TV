'use strict';

angular.module('tvApp').directive('animfix', function() {
  return function(scope, elem) {
    scope.$watch('article.titulo', function() {
      $(elem).queue(function(next) {
        $(this).removeClass('fadeOutUp').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass('animated fadeInDown').delay(9000).queue(function(next){
            $(this).addClass('animated fadeOutUp');
            next();
          });
        });
        next();
      });
    });
  };
});
