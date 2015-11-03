import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'org',
  namespace: 'orgs',
  createRecord: function(store, type, snapshot) {
    var org = this.serialize(snapshot);
    return this._request('orgs.create', org);
  },
  findRecord: function(store, type, id, snapshot) {
    var body = {'nickname': id};
    return this._request('orgs.get', body);
  },
});
