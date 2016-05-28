import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'project',
  namespace: 'projects',
  findAll: function(options) {
    var req = {};
    return this._request('me.search_projects', req, true);
  },
  createRecord: function(store, type, snapshot) {
    var project = this.serialize(snapshot);
    var req = {'project': project};
    return this._request('projects.create', req);
  },
  findRecord: function(store, type, id, snapshot) {
    var ownerNickname = id.split('/')[0];
    var projectNickname = id.split('/')[1];
    var req = {
        'project': {
            'nickname': projectNickname,
            'owner': {'nickname': ownerNickname},
        }
    };
    return this._request('projects.get', req);
  },
  query: function(store, snapshot, query) {
    return this._request('projects.search', query, true);
  },
  transfer: function(project, newOwner) {
    var req = {
        'owner': newOwner,
        'project': project
    };
    return this._request('projects.transfer', req);
  },
  updateRecord: function(store, type, snapshot) {
    var project = this.serialize(snapshot);
    var req = {'project': project};
    return this._request('projects.update', req);
  },
});
