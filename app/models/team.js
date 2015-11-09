import DS from 'ember-data';

export default DS.Model.extend({
  ident: DS.attr('string'),
  role: DS.attr('string'),
  owner: DS.belongsTo('owner'),
  projects: DS.hasMany('project'),
  kind: DS.attr('string'),
  memberships: DS.hasMany('membership'),
});
