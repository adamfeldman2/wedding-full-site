import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  tempC: DS.attr('number'),
  iconUrl: DS.attr('string')
});
