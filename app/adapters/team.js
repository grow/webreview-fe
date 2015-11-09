import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'team',
  namespace: 'teams',
  findRecord: function(store, type, id, snapshot) {
    var req = {
        'team': {
            'kind': 'PROJECT_OWNERS',
            'ident': id,
        }
    };
    return this._request('teams.get', req);
  },
});
