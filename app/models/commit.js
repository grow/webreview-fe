import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('actor'),
  message: DS.attr('string'),
  sha: DS.attr('string'),
});
