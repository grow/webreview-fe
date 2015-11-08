import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('nickname');
  },
  model: function(params, transition) {
    var ownerRouteModel = this.modelFor('owner');
    var ownerNickname = ownerRouteModel.owner.get('nickname');
    var projectName = ownerNickname + '/' + params['project_nickname'];
    var project = this.store.findRecord('project', projectName);

    project.then(function() {}, function(errors) {
      this.set('errors', errors.errors);
    }.bind(this));

    return project;
  },
  afterModel: function() {
    Ember.set(this.modelFor('owner'), 'project', this.modelFor('project'));
  },
  deactivate: function() {
    Ember.set(this.modelFor('owner'), 'project', null);
  },
});
