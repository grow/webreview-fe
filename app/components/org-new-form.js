import Ember from 'ember';

export default Ember.Component.extend({
  org: null,
  actions: {
    createOrg: function() {
      var org = this.get('org');
      org.save().then(function() {
        this.sendAction('orgCreated', org);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
