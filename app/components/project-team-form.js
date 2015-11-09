import Ember from 'ember';

export default Ember.Component.extend({
  user: null,
  store: Ember.inject.service(),
  actions: {
    createMembership: function() {
      var store = this.get('store');
      var identifier = this.get('newMemberIdentifier');
      var user = store.createRecord('user');
      user.set('nickname', identifier)

      var membership = this.get('membership');
      membership.set('user', user);
      return;

      membership.save().then(function() {
        this.sendAction('membershipCreated', membership);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
