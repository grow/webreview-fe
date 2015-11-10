import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeId: function(hash) {
    if (hash['user']) {
      hash.id = hash['user']['ident']
    }
    return hash;
  },
  attrs: {
    user: {embedded: 'always'},
  },
});
