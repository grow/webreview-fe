import Ember from 'ember';

export default Ember.Component.extend({
  user: null,
  membership: null,
  project: null,
  store: Ember.inject.service(),

  actions: {
    handleErrors: function(errors) {
      this.sendAction('handleErrors', errors);
      this.set('errors', errors);
    },
    createMembership: function() {
      var store = this.get('store');
      var membership = store.createRecord('membership');
      membership.set('project_ident', this.get('project.ident'));

      var identifier = this.get('newMemberIdentifier');
      if (identifier.indexOf('@') > -1) {
        var user = store.createRecord('user');
        user.set('email', identifier)
        membership.set('user', user);
      } else if (identifier.indexOf('.') > -1) {
        membership.set('domain', identifier);
      } else {
        var user = store.createRecord('user');
        user.set('email', identifier)
        membership.set('user', user);
      }

      membership.save().then(function() {
        this.sendAction('membershipCreated', membership);
        var team = this.get('team');
        team.reload();
        this.set('errors', null);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
    deleteMembership: function(team, membership) {
      membership.set('project_ident', this.get('project.ident'));
      membership.destroyRecord().then(function() {
        var team = this.get('team');
        team.reload();
      }.bind(this), function(errors) {
        membership.rollback();
        this.set('errors', errors.errors);
      }.bind(this))
    },
  },
});
