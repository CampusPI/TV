'use strict';

angular.module('tvApp').factory('BroadcastService', function () {
  return {
    get: function() {
      return [
        {
          priority: 1,
          type: 'Importante',
          text: 'Este é o primeiro aviso que avisa aos que foram avisados previamente que se pretenderem continuar a ser avisados terão de nos avisar.'
        },
        {
          priority: 1,
          type: 'Greve',
          text: 'Este é o segundo aviso que cenas fixes.'
        }
      ];
    }
  };
});
