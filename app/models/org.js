import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  ident: DS.attr('string'),
  avatar_url: DS.attr('string'),
  owner: DS.belongsTo('user'),
  kind: DS.attr('string'),
});
