import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new', {path: '/new'});
  this.resource('owner', {path: '/:owner_nickname'}, function() {
    this.resource('project', {path: '/:project_nickname'}, function() {
      this.route('builds', {path: '/builds'});
      this.route('translations', {path: '/translations'});
      this.route('settings', {path: '/settings'});
      this.route('team', {path: '/team'});
    });
  });
});

export default Router;
