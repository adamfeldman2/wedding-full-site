import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const url = 'http://api.wunderground.com/api/d68452eada2c6305/geolookup/conditions/q/canada/bracebridge.json';
    return Ember.$.getJSON(url).then(function(weatherData) {
      return weatherData;
    });
  }
});
