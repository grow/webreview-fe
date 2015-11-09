import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var project = this.modelFor('project');
    var team = this.store.findRecord('team', project.get('ident'));
    var membership = this.store.createRecord('membership');
    return Ember.RSVP.hash({
      newMemberIdentifier: null,
      membership: membership,
      project: project,
      team: team,
    });
  },
});
