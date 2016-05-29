import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query: function(store, snapshot, query) {
    if (query['project']) {
      return this._request('projects.get_group', query);
    } else if (query['org']) {
      return this._request('orgs.get_group', query);
    }
  },
  findRecord: function(store, type, id, snapshot) {
    var req = {
      'project': {
        'ident': id,
      }
    };
    return this._request('projects.get_group', req);
  },
});
