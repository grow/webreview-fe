import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  kind: 'catalog',
  namespace: 'catalogs',

  findRecord: function(store, type, id, snapshot) {
    var ownerNickname = id.split('/')[0];
    var projectNickname = id.split('/')[1];
    var locale = id.split('/')[2];
    var ref = id.split('/')[3];
    var body = {
        'catalog': {
            'locale': locale,
            'ref': ref,
        },
        'project': {
            'nickname': projectNickname,
            'owner': {'nickname': ownerNickname},
        }
    };
    return this._request('projects.get_catalog', body);
  },
  query: function(something, type, options) {
    return this._request('projects.list_catalogs', options);
  },
});
