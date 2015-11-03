import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    owner: {embedded: 'always'},
  },
  /*
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.ident,
        type: type.modelName,
        attributes: {
          name: payload.name,
          nickname: payload.nickname,
        },
        relationships: {
          owner: {
            data: {
              related: payload.owner,
            }
          }
        }
      }
    }
  }
  */
});
