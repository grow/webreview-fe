import DS from 'ember-data';

export default DS.Model.extend({
  locale: DS.attr('string'),
  name: DS.attr('string'),
  percent_translated: DS.attr('number'),
  num_fuzzy: DS.attr('number'),
  num_translated: DS.attr('number'),
  num_messages: DS.attr('number'),
  project: DS.belongsTo('project'),
  translations: DS.hasMany('translation'),
  ref: DS.attr('string'),
  sha: DS.attr('string'),
});
