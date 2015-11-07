import Ember from 'ember';

export default Ember.Service.extend({
  model: function() {
    return this.findRecord('user', 'me');
  }
});
