import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var model = this.modelFor('org');
    var org = model.org;
    var team = this.store.query('group', {
        'org': {'nickname': org.get('nickname')},
    });
    return Ember.RSVP.hash({
      newMemberIdentifier: null,
      org: org,
      team: team,
    });
  },
  actions: {
    membershipCreated: function(membership) {
    },
  },
});
