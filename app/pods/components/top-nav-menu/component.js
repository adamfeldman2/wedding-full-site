import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'top-nav-menu',
  showHamburger: false,

  setupClickEventHandler: Ember.on('didInsertElement', function() {
    Ember.$(document).on('click', this.clickHandlerFunction);
  }),

  destroyClickEventHandler: Ember.on('didDestroyElement', function() {
    Ember.$(document).off('click', this.clickHandlerFunction);
  }),

  clickHandlerFunction(event) {
    console.log(event.target, Ember.$('top-nav-menu'));
  },

  actions: {
    toggleMenu() {
      this.toggleProperty('showHamburger');
    },

    closeMenu() {
      this.toggleProperty('showHamburger');
    }
  }
});
