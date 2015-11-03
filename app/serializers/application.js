import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeId: function(hash) {
    if (hash['ident']) {
      hash.id = hash['ident']
    }
    return hash;
  },
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  },
});
