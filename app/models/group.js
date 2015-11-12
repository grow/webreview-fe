import DS from 'ember-data';

export default DS.Model.extend({
  ident: DS.attr('string'),
  project: DS.belongsTo('project'),
  users: DS.hasMany('membership'),
  domains: DS.hasMany('membership'),
});
