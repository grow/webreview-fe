import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord: function(store, type, snapshot) {
    var membership = this.serialize(snapshot);
    var req = {
      'project': {
          'ident': membership['project_ident'],
      },
      'membership': membership,
    };
    return this._request('projects.create_membership', req);
  },
  deleteRecord: function(store, type, snapshot) {
    var membership = this.serialize(snapshot);
    var req = {
      'project': {
          'ident': membership['project_ident'],
      },
      'membership': membership,
    };
    return this._request('projects.delete_membership', req);
  },
});
