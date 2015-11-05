import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.hasOne('user'),
  role: DS.attr('string'),
});
