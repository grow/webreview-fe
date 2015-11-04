import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var ownerNickname = transition.params.owner.owner_nickname;
    var projectNickname = transition.params.project.project_nickname;
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
      console.log(project.owner.nickname);
      console.log(project.nickname);
      this.transitionTo('translations.locale', project.owner.nickname, project.nickname, catalog);
    },
  },
});
