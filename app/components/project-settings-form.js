import Ember from 'ember';

export default Ember.Component.extend({
  project: null,
  actions: {
    updateProject: function() {
      var project = this.get('project');
      project.save().then(function() {
        this.sendAction('projectUpdated', project);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
