import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Settings',
  model: function() {
    return Ember.RSVP.hash({
      orgs: this.store.query('org', {mine: true}),
      user: this.store.findRecord('user', 'me'),
    });
  }
});
