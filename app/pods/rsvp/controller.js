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

  danceValue: '',
  danceValueContent: Ember.computed.gte('danceValue.length', 4),

  trueAttending1: Ember.computed.and('willAttend','numPeople', 'guestNameValid'),

  trueAttending2: Ember.computed.and('willAttend','notNumPeople'),

  // One of these properties must be true to activate next button
  isValidAttending: Ember.computed.or('trueAttending1','trueAttending2','notWillAttend'),

  isDisabledAttending: Ember.computed.not('isValidAttending'),

  actions: {
    displayAttendingQuestion() {
      $('.fullName').hide();
      $('.dance').hide();
      this.set('displayAttendingQuestion', true);
    },

    displayDietaryQuestion() {
      $('.attending').hide();
      this.set('displayDietaryQuestion', true);
    },

    displayDanceQuestion () {
      $('.dietary').hide();
      this.set('displayDanceQuestion', true);
    },

    displayCommentsQuestion() {
      $('.dance').hide();
      this.set('displayCommentsQuestion', true);
    },

    submitRSVP() {
      $('.comments').hide();
      this.set('submitMessage', 'Your RSVP has been received!');
    }
  }







});
