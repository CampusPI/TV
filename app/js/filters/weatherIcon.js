'use strict';

angular.module('tvApp').filter('weatherIcon', function() {

  var states = {
    chanceflurries : null,
    chancerain : null,
    chancesleet : null,
    chancesnow : null,
    chancetstorms : null,
    clear : 'sun',
    cloudy : 'cloud',
    flurries : 'cloudHailAlt',
    fog : 'cloudFog',
    hazy : 'cloudFogSun',
    mostlycloudy : 'cloudSun',
    mostlysunny : 'cloudSun',
    partlycloudy : 'cloudSun',
    partlysunny : 'cloudSun',
    sleet : 'cloudHailAlt',
    rain : 'cloudRain',
    snow : 'cloudSnowAlt',
    sunny : 'sun',
    tstorms : 'cloudLightning',
    unknown : 'cloudLightning'
  };

  return function(input) {
    return states[input];
  };

});
