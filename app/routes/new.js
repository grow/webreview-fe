import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('project');
  },
  actions: {
    projectCreated: function(project) {
      this.transitionTo(
          'project.builds',
          project.get('owner.nickname'),
          project.get('nickname'));
    },
  },
});
