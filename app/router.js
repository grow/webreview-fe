import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('org', {path: '/:org_name'}, function() {
    this.resource('project', {path: '/:project_name'}, function() {
      this.route('team', {path: '/team'});
    });
  });
});

export default Router;
