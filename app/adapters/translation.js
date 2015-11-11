import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'translation',
  namespace: 'translations',
  updateRecord: function(store, type, snapshot) {
    var translation = this.serialize(snapshot);
    console.log(translation);
    var req = {
      'project': {
          'nickname': translation['project_nickname'],
          'owner': {'nickname': translation['project_owner_nickname']},
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
