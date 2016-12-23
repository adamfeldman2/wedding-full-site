import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('string'),
  willAttend: DS.attr('boolean'),
  numPeople: DS.attr('boolean'),
  guestName: DS.attr('string'),
  userDietary: DS.attr('string'),
  guestDietary: DS.attr('string'),
  dance: DS.attr('string'),
  comments:DS.attr('string')
});
