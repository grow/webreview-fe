import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'fileset',
  namespace: 'filesets',
  query: function(something, type, options) {
    return this._request('filesets.search', options, true);
  },
});
