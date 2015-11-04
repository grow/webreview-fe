import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'owner',
  namespace: 'owners',
  findRecord: function(store, type, id, snapshot) {
    var body = {'owner': {'nickname': id}};
    return this._request('owners.get', body);
  },
});
