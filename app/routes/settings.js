import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Settings',
  model: function() {
    return this.store.findRecord('user', 'me');
  }
});

