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
      project.save().then(function() {
        this.transitionTo('project.builds', project.get('owner'), project);
      }.bind(this));
    }
  }
});

