import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new', {path: '/new'});
  this.resource('new-org', {path: '/new/org'});
  this.resource('settings', {path: '/settings'}, function() {
    this.route('org', {path: '/org/:org_nickname'});
  });
  this.resource('owner', {path: '/:owner_nickname'}, function() {
    this.resource('project', {path: '/:project_nickname'}, function() {
      this.route('content', {path: '/content'});
      this.resource('translations', {path: '/translations'}, function() {
        this.route('locale', {path: '/:locale'});
      });
      this.route('settings', {path: '/settings'});
      this.route('team', {path: '/team'});
    });
  });
});

export default Router;
