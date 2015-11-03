import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('project');
  },
  setupController: function(controller, project) {
    controller.set('model', project);
  },
  actions: {
    createProject: function() {
      var controller = this.get('controller');
      var project = this.store.createRecord('project', {
        'nickname': controller.get('nickname')
      });
      project.save();
      this.transitionTo('owner.project.builds', 'jeremydw', 'test');
    }
  }
});

