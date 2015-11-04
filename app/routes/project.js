import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var ownerNickname = transition.params.owner.owner_nickname;
    var projectName = ownerNickname + '/' + params['project_nickname'];
    return this.store.find('project', projectName);
  },
  actions: {
    catalogSelected: function(project, catalog) {
      this.transitionTo('translations.locale', project.owner.nickname, project.nicname, catalog);
    },
  },
});
