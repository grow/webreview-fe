import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      owner: this.store.find('owner', params['owner_nickname']),
      projects: this.store.findAll('project', params['owner_nickname']),
    });
  },
});
