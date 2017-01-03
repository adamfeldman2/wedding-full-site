import Ember from 'ember';

export default Ember.Component.extend({

  showHamburger: false,
  showX: true,

  actions: {
    hamburgerMenu() {
      this.toggleProperty('showHamburger');
      this.toggleProperty('showX');
      Ember.$('.nav-items').css('display','flex');
    },

    hamburgerMenuClose() {
      this.toggleProperty('showHamburger');
      this.toggleProperty('showX');
      Ember.$('.nav-items').css('display','none');
    }
  }


});
