import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'New site',
  model: function() {
    var me = this.modelFor('application').me;
    var query = {'user': {'nickname': me.get('nickname')}};
    return Ember.RSVP.hash({
      me: me,
      owner_nickname: me.get('nickname'),
      project: this.store.createRecord('project'),
      orgs: this.store.query('org', {mine: true}),
    });
  },
  actions: {
    projectCreated: function(project) {
      this.transitionTo(
          'project.index',
          project.get('owner.nickname'),
          project.get('nickname'));
    },
  },
});
