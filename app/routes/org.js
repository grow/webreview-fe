import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.org.get('nickname');
  },
  model: function(params) {
    var orgNickname = params['org_nickname'];
    var org = this.store.findRecord('org', orgNickname);
    org.then(function() {}, function(errors) {
      this.set('errors', errors.errors);
    }.bind(this));
    return Ember.RSVP.hash({
      org: org,
    });
  },
  error: function(error, transition) {
    this.set('model.errors', error.errors);
    return true;
  },
});
