import Ember from 'ember';

export default Ember.Component.extend({
  owners: null,
  actions: {
    selectOwner: function() {
      var project = this.get('project');
      project.set('owner', owner);
      project.save().then(function() {
        this.sendAction('projectCreated', project);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});

