import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeId: function(hash) {
    if (hash['user']) {
      hash.id = hash['ident'] + hash['user']['ident'];
    } else if (hash['domain']) {
      hash.id = hash['ident'] + hash['domain'];
    }
    return hash;
  },
  attrs: {
    user: {embedded: 'always'},
  },
});
