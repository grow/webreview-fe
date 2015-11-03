import DS from 'ember-data';

export default DS.RESTSerializer.extend({
/*
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.ident,
        type: type.modelName,
        attributes: {
          name: payload.nickname
        }
      }
    }
  }
*/
});
