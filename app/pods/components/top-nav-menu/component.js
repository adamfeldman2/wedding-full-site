import Ember from 'ember';

export default Ember.Component.extend({
  showHamburger: true,

  actions: {
    toggleMenu() {
      this.toggleProperty('showHamburger');
    }
  }
});
