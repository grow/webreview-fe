import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'user',
  namespace: 'users',
  updateRecord: function(store, type, snapshot) {
    var user = this.serialize(snapshot);
    var req = {'user': user};
    return this._request('me.update', req);
  },
  findRecord: function(store, type, id, snapshot) {
    if (id == 'me') {
      return this._request('me.get', {});
    } else {
      var req = {
        'user': {'nickname': id},
      };
      return this._request('me.get', req);
    }
  },
});
