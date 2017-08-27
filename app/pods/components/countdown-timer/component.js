import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'countdown-wrapper',
  classNames: ['fadeIn'],
  targetTime: new Date("Aug 27, 2017 23:59:00").getTime(),
  currentTime: new Date().getTime(),
  timeRemaining: Ember.computed('targetTime', 'currentTime', function() {
    return this.get('targetTime') - this.get('currentTime');
  }),

  convertToClockFormat: Ember.computed('timeRemaining', 'timeElapsed', function() {
    const timeRemaining = this.get('timeRemaining');
    return Ember.String.htmlSafe(`
    ${Math.floor(timeRemaining / (1000 * 60 * 60 * 24))} <span>Days Until...</span>
    `);
  })
});
