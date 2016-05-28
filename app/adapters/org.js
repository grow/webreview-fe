import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'org',
  namespace: 'orgs',
  createRecord: function(store, type, snapshot) {
    var org = this.serialize(snapshot);
    var body = {'org': org};
    return this._request('orgs.create', body);
  },
  findRecord: function(store, type, id, snapshot) {
    var body = {'org': {'nickname': id}};
    return this._request('orgs.get', body);
  },
  query: function(something, type, options) {
    return this._request('users.search_orgs', options, true);
  },
});
