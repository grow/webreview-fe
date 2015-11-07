import Ember from 'ember';

export default Ember.Component.extend({
  project: null,

  actions: {
    createProject: function() {
      var project = this.get('project');
      var owner = this.store.findRecord('user', 'me');
      project.set('owner', owner);
      project.save().then(function() {
        this.sendAction('projectCreated', project);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
