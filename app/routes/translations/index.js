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
    project.then(function() {}, function(errors) {
      this.set('errors', errors.errors);
    }.bind(this));

    var catalogs = this.store.query('catalog', projectObj);
    catalogs.then(function() {}, function(errors) {
      this.set('errors', errors.errors);
    }.bind(this));

    return Ember.RSVP.hash({
      project: project,
      catalogs: catalogs,
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
