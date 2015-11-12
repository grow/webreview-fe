import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  domain: DS.attr('string'),
  role: DS.attr('string'),

  team_ident: DS.attr('string'),
  project_ident: DS.attr('string'),
});
