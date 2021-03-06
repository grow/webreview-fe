import DS from 'ember-data';

export default DS.Model.extend({
  ident: DS.attr('string'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  status: DS.attr('string'),
  modified: DS.attr('date'),
  finalized: DS.attr('boolean'),
  subdomain: DS.attr('string'),
  commit: DS.belongsTo('commit'),
});
