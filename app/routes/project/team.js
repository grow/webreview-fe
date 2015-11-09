import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var project = this.modelFor('project');
    var team = this.store.findRecord('team', project.get('ident'));
    return Ember.RSVP.hash({
      newMemberIdentifier: null,
      project: project,
      team: team,
    });
  },
});
