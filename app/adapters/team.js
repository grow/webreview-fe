import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'team',
  namespace: 'teams',
  createRecord: function(store, type, snapshot) {
    console.log('snapshot');
    console.log(snapshot);
    var team = this.serialize(snapshot);
    var req = {'team': team};
    return this._request('teams.create_membership', req);
  },
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
