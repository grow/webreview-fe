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
      membership.set('project_ident', this.get('project.ident'));
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
