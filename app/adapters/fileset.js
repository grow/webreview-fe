import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'fileset',
  namespace: 'filesets',
  query: function(something, type, options) {
    return this._request('filesets.search', options, true);
  },
  deleteRecord: function(store, type, snapshot) {
    var fileset = this.serialize(snapshot);
    var req = {
      'fileset': {
          'ident': fileset['ident'],
      },
    };
    return this._request('filesets.delete', req);
  },
});
