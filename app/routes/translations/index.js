import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var ownerRouteModel = this.modelFor('owner');
    var ownerNickname = ownerRouteModel.owner.get('nickname');
    var projectRouteModel = this.modelFor('project');
    var projectNickname = projectRouteModel.get('nickname');
    var projectName = ownerNickname + '/' + projectNickname;
    var project = {
      'project': {
        'nickname': projectNickname,
        'owner': {'nickname': ownerNickname},
      },
    };
    return Ember.RSVP.hash({
      project: this.store.findRecord('project', projectName),
      catalogs: this.store.query('catalog', project),
    });
  },
  actions: {
    catalogSelected: function(project, catalog) {
      this.transitionTo(
          'translations.locale',
          project.get('owner.nickname'),
          project.get('nickname'),
          catalog.get('locale'),
      );
    },
  },
});
