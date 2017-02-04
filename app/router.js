import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('home');
  this.route('couple');
  this.route('details');
  this.route('rsvp');
  this.route('contact');
  this.route('admin');
  this.route('playground');
  this.route('accommodations');
});

export default Router;
