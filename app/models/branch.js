import DS from 'ember-data';

export default DS.Model.extend({
  sha: DS.attr('string'),
  author: DS.belongsTo('actor'),
  message: DS.attr('string'),
  branch: DS.attr('string'),
  modified: DS.attr('string'),
});
