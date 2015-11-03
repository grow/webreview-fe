import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('org');
  },
  actions: {
    orgCreated: function(org) {
      this.transitionTo('owner', org.get('nickname'))
    }
  }
});

