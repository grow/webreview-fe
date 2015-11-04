import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeId: function(hash) {
    hash.id = hash['locale']
    return hash;
  },
  attrs: {
    translations: {embedded: 'always'},
  },
});
