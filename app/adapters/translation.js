import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'translation',
  namespace: 'translations',
  updateRecord: function(store, type, snapshot) {
    var project = this.serialize(snapshot);
    console.log(project);
    var req = {'project': project};
    return this._request('projects.update_translations', req);
  },
});
