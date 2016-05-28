import Ember from 'ember';

export default Ember.Component.extend({
  org: null,
  actions: {
    updateUser: function() {
      var user = this.get('user');
      user.save().then(function() {
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
