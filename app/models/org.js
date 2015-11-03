import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  ident: DS.attr('string'),
  kind: DS.attr('string'),
});
