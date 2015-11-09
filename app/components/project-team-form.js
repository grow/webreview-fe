import Ember from 'ember';

export default Ember.Component.extend({
  user: null,
  membership: null,
  project: null,
  store: Ember.inject.service(),

  actions: {
    createMembership: function() {
      var store = this.get('store');

      var user = store.createRecord('user');
      var identifier = this.get('newMemberIdentifier');
      user.set('email', identifier)

      var membership = store.createRecord('membership');
      membership.set('user', user);
      membership.set('team_ident', this.get('project.ident'));
      membership.save().then(function() {
        this.sendAction('membershipCreated', membership);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
