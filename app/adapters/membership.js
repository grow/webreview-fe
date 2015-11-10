import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'membership',
  namespace: 'membership',

  createRecord: function(store, type, snapshot) {
    var membership = this.serialize(snapshot);
    var req = {
      'team': {  // TODO: Genericize.
          'ident': membership['team_ident'],
          'kind': 'PROJECT_OWNERS',
      },
      'membership': membership,
    };
    return this._request('teams.create_membership', req);
  },
  deleteRecord: function(store, type, snapshot) {
    var membership = this.serialize(snapshot);
    var req = {
      'team': {  // TODO: Genericize.
          'ident': membership['team_ident'],
          'kind': 'PROJECT_OWNERS',
      },
      'membership': membership,
    };
    return this._request('teams.delete_membership', req);
  },
});
