import DS from 'ember-data';

export default DS.Model.extend({
  ident: DS.attr('string'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  status: DS.attr('string'),
  modified: DS.attr('string'),
  finalized: DS.attr('boolean'),
  commit: DS.belongsTo('commit'),
});
