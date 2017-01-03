import Ember from 'ember';

export default Ember.Controller.extend({
  city: Ember.computed.alias('model.location.city')
});
