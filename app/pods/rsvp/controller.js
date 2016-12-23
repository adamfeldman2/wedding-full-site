import Ember from 'ember';

export default Ember.Controller.extend({
  nameValue: '',
  validName: Ember.computed.gte('nameValue.length', 3),
  isDisabledName: Ember.computed.not('validName'),

  willAttend: null,
  notWillAttend: Ember.computed.equal('willAttend', false),
  numPeople: null,
  notNumPeople: Ember.computed.equal('numPeople', false),

  trueAttending1: Ember.computed.and('willAttend','numPeople', 'guestNameValid'),

  trueAttending2: Ember.computed.and('willAttend','notNumPeople'),

  // One of these properties must be true to activate next button
  isValidAttending: Ember.computed.or('trueAttending1','trueAttending2','notWillAttend'),

  isDisabledAttending: Ember.computed.not('isValidAttending'),

  guestName: '',
  guestNameValid: Ember.computed.gte('guestName.length', 3),

  danceValue: '',
  danceValueContent: Ember.computed.gte('danceValue.length', 4),

  commentsValue: '',

  attendingSubmitMessage: 'Submission received! We\'ll see you on August 27th! 🎉',

  notAttendingSubmitMessage: 'It won\'t be the same without you, but we understand. Take care!',


  actions: {
    backToNameQuestion() {
      Ember.$('.attending').hide();
      Ember.$('.fullName').show();
    },

    displayAttendingQuestion() {
      Ember.$('.fullName').hide();
      Ember.$('.dance').hide();
      this.set('displayAttendingQuestion', true);
      Ember.$('.attending').show();
    },

    backToAttendingQuestion() {
      Ember.$('.dietary').hide();
      Ember.$('.attending').show();
    },

    displayDietaryQuestion() {
      Ember.$('.attending').hide();
      this.set('displayDietaryQuestion', true);
      Ember.$('.dietary').show();
    },

    backToDietaryQuestion() {
      Ember.$('.dance').hide();
      Ember.$('.dietary').show();
    },

    displayDanceQuestion () {
      Ember.$('.dietary').hide();
      this.set('displayDanceQuestion', true);
      Ember.$('.dance').show();
    },

    backToDanceQuestion() {
      Ember.$('.comments').hide();
      Ember.$('.dance').show();
    },

    displayCommentsQuestion() {
      Ember.$('.dance').hide();
      this.set('displayCommentsQuestion', true);
      Ember.$('.comments').show();
    },

    submitRSVP() {
      Ember.$('.comments').hide();
      this.set('submitMessage', true);
    }
  }







});
