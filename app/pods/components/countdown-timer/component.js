import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'countdown-wrapper',

  weddingDate: 'August 27 2017 20:00:00 EST-0500',
  timeElapsed: 0,

  daysRemaining: Ember.computed('weddingDate', function() {
    const today = new Date();
    const remaining = Date.parse(this.get('weddingDate')) - Date.parse(today);
    const days = Math.floor( remaining/(1000*60*60*24) );

    return days;
  }),

  countdownTitle: Ember.computed('daysRemaining', function() {
    if (this.get('daysRemaining') >= 0) {
      return 'Wedding Countdown';
    } else {
      return 'Living Happily Ever After:';
    }

  }),



  timeRemaining: Ember.computed('weddingDate', 'countdownGreeting', 'timeElapsed',  function() {
    const today = new Date();

  // Variables used for time remaining //
    const remaining = Date.parse(this.get('weddingDate')) - Date.parse(today);
    const seconds = Math.floor( (remaining/1000) % 60 );
    const minutes = Math.floor( (remaining/1000/60) % 60 );
    const hours = Math.floor( (remaining/(1000*60*60)) % 24 );
    const days = Math.floor( remaining/(1000*60*60*24) );

  // Variables used for time passed //
    const timePassed = Date.parse(today) - Date.parse(this.get('weddingDate'));
    const secondsPassed = Math.floor( (timePassed/1000) % 60 );
    const minutesPassed = Math.floor( (timePassed/1000/60) % 60 );
    const hoursPassed = Math.floor( (timePassed/(1000*60*60)) % 24 );
    const daysPassed = Math.floor( timePassed/(1000*60*60*24) );


  // Return either time remaining or time passed //
    if (days >= 0) {
      // this.set('countdownGreeting', 'Wedding Countdown:');
      const countdown = `<div class="countdown-cell-wrapper"><div class="countdown-cell"><span class="countdown-text">Days</span> <span class="countdown-number">${days}</span></div> <div class="countdown-cell"><span class="countdown-text">Hours</span> <span class="countdown-number">${hours}</span></div> <div class="countdown-cell"><span class="countdown-text">Minutes</span> <span class="countdown-number">${minutes}</span></div> <div class="countdown-cell"><span class="countdown-text">Seconds</span> <span class="countdown-number">${seconds}</span></div></div>`;
      return new Ember.String.htmlSafe(countdown);

    } else {
      // this.set('countdownGreeting', 'Happily Ever After:');
      const countup = `<div class="countdown-cell-wrapper"><div class="countdown-cell"><span class="countdown-text">Days</span> <span class="countdown-number">${daysPassed}</span></div> <div class="countdown-cell"><span class="countdown-text">Hours</span><span class="countdown-number">${hoursPassed}</span></div> <div class="countdown-cell"><span class="countdown-text">Minutes</span><span class="countdown-number">${minutesPassed}</span></div> <div class="countdown-cell"><span class="countdown-text">Seconds</span> <span class="countdown-number">${secondsPassed}</span></div></div>`;
      return new Ember.String.htmlSafe(countup);
    }
  }),

  updateTimer: Ember.on('init', function() {
    setInterval(() => {
      this.incrementProperty('timeElapsed');
    }, 1000);
  })

});
