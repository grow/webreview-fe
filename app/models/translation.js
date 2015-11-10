import DS from 'ember-data';

export default DS.Model.extend({
  msgid: DS.attr('string'),
  string: DS.attr('string'),
  comments: DS.attr('string'),
  project_ident: DS.attr('string'),
  ref: DS.attr('string'),
  sha: DS.attr('string'),
  locale: DS.attr('string'),
  // context: DS.attr('string'),
});
