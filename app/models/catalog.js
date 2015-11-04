import DS from 'ember-data';

export default DS.Model.extend({
  locale: DS.attr('string'),
  project: DS.belongsTo('project'),
  translations: DS.hasMany('translation'),
});
