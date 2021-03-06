import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var branch = params.branch;

    var translationsRouteModel = this.modelFor('translations');
    Ember.set(translationsRouteModel, 'branch', branch);

    var ownerRouteModel = this.modelFor('owner');
    var ownerNickname = ownerRouteModel.owner.get('nickname');
    var projectRouteModel = this.modelFor('project');
    var projectNickname = projectRouteModel.get('nickname');
    var projectName = ownerNickname + '/' + projectNickname;
    var projectObj = {
      'branch': branch,
      'project': {
        'nickname': projectNickname,
        'owner': {'nickname': ownerNickname},
      },
    };
    var project = this.store.findRecord('project', projectName);
    var catalogs = this.store.query('catalog', projectObj);
    return Ember.RSVP.hash({
      errors: null,
      branch: branch,
      project: project,
      catalogs: catalogs,
    });
  },

  actions: {
    error: function(error, transition) {
      this.set('model.errors', error.errors);
      return true;
    },

    catalogSelected: function(project, catalog) {
      this.transitionTo(
          'locales.locale',
          project.get('owner.nickname'),
          project.get('nickname'),
          catalog.get('locale'),
      );
    },

    loading: function(transition, originRoute) {
      return true;
    },
  },
});

