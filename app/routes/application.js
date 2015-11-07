import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      me: this.store.findRecord('user', 'me'),
    });
  },
});
