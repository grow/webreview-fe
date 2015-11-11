import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'branch',
  namespace: 'branchs',
  query: function(something, type, options) {
    return this._request('projects.list_branches', options);
  },
});
