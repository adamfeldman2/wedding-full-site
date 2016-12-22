import Ember from 'ember';

export default Ember.Controller.extend({
  nameValue: '',
  validName: Ember.computed.gte('nameValue.length', 3),
  isDisabledName: Ember.computed.not('validName'),
  willAttend: null,
  numPeople: null,

  // actions







});
