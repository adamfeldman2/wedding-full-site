import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'countdown-wrapper',

  // classNames: ['countdown-container'],

  today: new Date(),

  countdownGreeting: 'Wedding Countdown',

  weddingDate: 'August 27 2017 20:00:00 EST-0500',

  timeRemaining: Ember.computed('weddingDate', 'countdownGreeting', function() {

  // Variables used for time remaining //
    const remaining = Date.parse(this.get('weddingDate')) - Date.parse(this.get('today'));
    const seconds = Math.floor( (remaining/1000) % 60 );
    const minutes = Math.floor( (remaining/1000/60) % 60 );
    const hours = Math.floor( (remaining/(1000*60*60)) % 24 );
    const days = Math.floor( remaining/(1000*60*60*24) );

  // Variables used for time passed //
    const timePassed = Date.parse(this.get('today')) - Date.parse(this.get('weddingDate'));
    const secondsPassed = Math.floor( (timePassed/1000) % 60 );
    const minutesPassed = Math.floor( (timePassed/1000/60) % 60 );
    const hoursPassed = Math.floor( (timePassed/(1000*60*60)) % 24 );
    const daysPassed = Math.floor( timePassed/(1000*60*60*24) );


  // Return either time remaining or time passed //
    if (days >= 0) {
      // this.set('countdownGreeting', 'Wedding Countdown:');
      return `${days} Days, ${hours} Hours, ${minutes} Minutes, and ${seconds} Seconds`;
    } else {
      // this.set('countdownGreeting', 'Happily Ever After:');
      return `Bryan and Ali have been living happily ever after for ${daysPassed} Days, ${hoursPassed} Hours, ${minutesPassed} Minutes, and ${secondsPassed} Seconds.`;
    }


  }),

  actions: {
    alertTest() {
      console.log('This works!');
      this.toggleProperty('buttonClicked')
    },

    timeRemaining() {

      const remaining = Date.parse(this.get('weddingDate')) - Date.parse(new Date);

      const seconds = Math.floor( (remaining/1000) % 60 );
      const minutes = Math.floor( (remaining/1000/60) % 60 );
      const hours = Math.floor( (remaining/(1000*60*60)) % 24 );
      const days = Math.floor( remaining/(1000*60*60*24) );

      this.set('showRemainder',`There are ${days} Days, ${hours} Hours, ${minutes} Minutes, and ${seconds} Seconds left until the wedding!`);
    }
  }


});
