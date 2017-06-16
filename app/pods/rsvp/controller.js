import Ember from 'ember';

export default Ember.Controller.extend({
  nameValue: '',
  validName: Ember.computed.gte('nameValue.length', 3),
  isDisabledName: Ember.computed.not('validName'),

  countUp: 0,

  willAttend: true,

  danceValue: '',
  danceValueContent: Ember.computed.gte('danceValue.length', 4),

  commentsValue: '',

  attendingSubmitMessage: 'Your submission has been received! We\'ll see you on August 27th! 🎉',

  commentsBackButton: '',


  actions: {
    backToNameQuestion() {
      Ember.$('.dance').hide();
      Ember.$('.fullName').show();
    },

    displayDanceQuestion () {
      Ember.$('.fullName').hide();
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
      const userName = this.get('nameValue');
      const dance = this.get('danceValue');
      const comments = this.get('commentsValue');
      const newRSVP = this.store.createRecord('rsvp',
      {
        userName: userName,
        dance: dance,
        comments:comments
      });

      newRSVP.save().then((response) => {
        Ember.$('.comments').hide();
        this.set('submitMessage', true);
      });
    }
  }
});
