import Ember from 'ember';

export default Ember.Controller.extend({
  nameValue: '',
  validName: Ember.computed.gte('nameValue.length', 3),
  isDisabledName: Ember.computed.not('validName'),

  willAttend: null,
  notWillAttend: Ember.computed.equal('willAttend', false),
  numPeople: null,
  notNumPeople: Ember.computed.equal('numPeople', false),

  guestName: '',
  guestNameValid: Ember.computed.gte('guestName.length', 3),

  trueAttending1: Ember.computed.and('willAttend','numPeople', 'guestNameValid'),

  trueAttending2: Ember.computed.and('willAttend','notNumPeople'),

  // One of these properties must be true to activate next button
  isValidAttending: Ember.computed.or('trueAttending1','trueAttending2','notWillAttend'),

  isDisabledAttending: Ember.computed.not('isValidAttending'),







});
