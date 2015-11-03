import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  description: DS.attr('string'),
  ident: DS.attr('string'),
  owner: DS.belongsTo('owner'),
});
