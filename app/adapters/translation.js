import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'translation',
  namespace: 'translations',
  updateRecord: function(store, type, snapshot) {
    var translation = this.serialize(snapshot);
    var req = {
      'project': {
          'nickname': snapshot.get('project_nickname'),
          'owner': {'nickname': snapshot.get('project_owner_nickname')},
      },
      'catalog': {
        'locale': translation['locale'],
        'ref': translation['ref'],
        'sha': translation['sha'],
        'translations': [translation],
      },
    };
    return this._request('projects.update_translations', req);
  },
});
