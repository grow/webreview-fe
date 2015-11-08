import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'New site',
  model: function() {
    var me = this.store.findRecord('user', 'me');
    var query = {'user': {'nickname': 'jeremydw575'}};
    return Ember.RSVP.hash({
      me: me,
      project: this.store.createRecord('project'),
      owners: this.store.query('org', query),
    });
  },
  actions: {
    projectCreated: function(project) {
      this.transitionTo(
          'project.builds',
          project.get('owner.nickname'),
          project.get('nickname'));
    },
  },
});
