import Ember from 'ember';

export default Ember.Controller.extend({
  displayTable: true,
  adminUsername: '',
  adminPassword: '',
  adminUsernameTrue: Ember.computed.equal('adminUsername', 'user1'),
  adminPasswordTrue: Ember.computed.equal('adminPassword', 'robot1990'),
  allowAccess: Ember.computed.and('adminUsernameTrue', 'adminPasswordTrue'),

  actions: {
    adminAccess() {
      if(this.get('allowAccess')) {
        this.set('displayTable',false);
        Ember.$('.admin-sign-in').hide();
      } else {
        this.set('tryAgain', 'Nope, try again!');
        Ember.$('.try-again').fadeIn('slow').delay(1500).fadeOut();
      }
    }
  }
});
