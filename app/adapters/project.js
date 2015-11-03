import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'project',
  namespace: 'projects',
  findAll: function() {
    var body = {};
    return this._request('me.search_projects', body, true);
  },
  createRecord: function(store, type, snapshot) {
    var project = this.serialize(snapshot);
    // TODO: Dont hardcode me.
    project['owner'] = {
       'nickname': 'jeremydw',
       'ident': '5066549580791808'
    };
    return this._request('projects.create', project);
  },
  findRecord: function(store, type, id, snapshot) {
    var ownerNickname = id.split('/')[0];
    var projectNickname = id.split('/')[1];
    var body = {
      'nickname': projectNickname,
      'owner': {'nickname': ownerNickname},
    };
    return this._request('projects.get', body);
  },
});
