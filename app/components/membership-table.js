import Ember from 'ember';

export default Ember.Component.extend({
  user: null,
  membership: null,
  project: null,
  store: Ember.inject.service(),

  domainRoles: [
    {'caption': 'Editor', 'value': 'WRITE'},
    {'caption': 'Translator', 'value': 'TRANSLATE'},
    {'caption': 'Viewer', 'value': 'READ'},
  ],

  userRoles: [
    {'caption': 'Admin', 'value': 'ADMIN'},
    {'caption': 'Editor', 'value': 'WRITE'},
    {'caption': 'Translator', 'value': 'TRANSLATE'},
    {'caption': 'Viewer', 'value': 'READ'},
  ],

  actions: {
    deleteMembership: function(team, membership) {
      membership.set('project_ident', this.get('project.ident'));
      membership.destroyRecord().then(function() {
        var team = this.get('team');
        team.reload();
        this.sendAction('handleErrors', null);
      }.bind(this), function(error) {
        membership.rollback();
        this.sendAction('handleErrors', error.errors);
      }.bind(this))
    },
    error: function(error) {
      this.sendAction('handleErrors', error.errors);
    },
  },
});
