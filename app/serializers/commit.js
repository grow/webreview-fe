import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeId: function(hash) {
    hash.id = hash['sha']
    return hash;
  },
  attrs: {
    author: {embedded: 'always'},
    branch: {embedded: 'always'},
  },
});
