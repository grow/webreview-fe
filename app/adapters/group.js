import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findRecord: function(store, type, id, snapshot) {
    var req = {
      'project': {
        'ident': id,
      }
    };
    return this._request('projects.get_group', req);
  },
});
