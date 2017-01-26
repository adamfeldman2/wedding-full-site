import Ember from 'ember';

export default Ember.Component.extend({

  carBrands: ['Honda', 'Toyota', 'Ford'],
  actions: {
      addCar(val) {
        this.get('carBrands').pushObject(val);
      }
  }

});
