import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  description: DS.attr('string'),
  ident: DS.attr('string'),
  projects: DS.hasMany('project'),
  memberships: DS.hasMany('team-membership'),
  owner: DS.belongsTo('owner'),
});
