import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ident: DS.attr('string'),
  commit: DS.belongsTo('commit'),
});
