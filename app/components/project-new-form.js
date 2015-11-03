import Ember from 'ember';

export default Ember.Component.extend({
  project: null,
  actions: {
    createProject: function() {
      var project = this.get('project');
      project.save().then(function() {
        this.sendAction('projectCreated', project);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
