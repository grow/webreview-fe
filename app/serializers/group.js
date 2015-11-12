import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeId: function(hash) {
    if (hash['project']['ident']) {
      hash.id = hash['project']['ident']
    }
    return hash;
  },
  attrs: {
    users: {embedded: 'always'},
    project: {embedded: 'always'},
    memberships: {embedded: 'always'},
  },
});
