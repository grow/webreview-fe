import DS from 'ember-data';

export default DS.Model.extend({
  msgid: DS.attr('string'),
  string: DS.attr('string'),
  comments: DS.attr('string'),
  // context: DS.attr('string'),
});
