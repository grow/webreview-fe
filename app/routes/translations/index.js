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
    var catalogs = this.store.query('catalog', projectObj);
    return Ember.RSVP.hash({
      errors: null,
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
          'translations.locale',
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
