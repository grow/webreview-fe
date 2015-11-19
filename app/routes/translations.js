import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var ownerRouteModel = this.modelFor('owner');
    var ownerNickname = ownerRouteModel.owner.get('nickname');
    var projectRouteModel = this.modelFor('project');
    var projectNickname = projectRouteModel.get('nickname');
    var projectName = ownerNickname + '/' + projectNickname;
    var projectObj = {
      'project': {
        'nickname': projectNickname,
        'owner': {'nickname': ownerNickname},
      },
    };
    var project = this.store.findRecord('project', projectName);
    var branches = this.store.query('branch', projectObj);
    return Ember.RSVP.hash({
      errors: null,
      branches: branches,
      project: project,
    });
  },

  actions: {
    error: function(error, transition) {
      this.set('model.errors', error.errors);
      return true;
    },

    selectBranch: function(branch) {
      var translationsRouteModel = this.modelFor('translations');
      var project = translationsRouteModel.project;
      this.transitionTo(
          'locales',
          project.get('owner.nickname'),
          project.get('nickname'),
          branch,
      );
    },

    loading: function(transition, originRoute) {
      return true;
    },
  },
});
