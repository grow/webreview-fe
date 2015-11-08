import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var owner = this.store.find('owner', params['owner_nickname']);
    var projects = this.store.findAll('project', params['owner_nickname']);

    owner.then(function() {}, function(errors) {
      this.set('errors', errors.errors);
    }.bind(this));

    return Ember.RSVP.hash({
      owner: owner,
      project: null,
      projects: projects,
    });
  },
});
