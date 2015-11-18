import Ember from 'ember';

export default Ember.Component.extend({
  role: null,

  actions: {
    handleErrors: function(errors) {
      this.sendAction('handleErrors', errors);
      this.set('errors', errors);
    },
    updateMembership: function(value) {
      var val = this.get('element').querySelector('select').value;
      var membership = this.get('membership');
      var project = this.get('project');
      var team = this.get('team');
      membership.set('role', val);
      membership.set('project_ident', project.get('ident'));
      membership.save().then(function() {
        team.reload();
      }.bind(this), function(errors) {
        membership.rollback();
        this.set('errors', errors.errors);
      }.bind(this))
    },
  },
});
