import DS from 'ember-data';

export default DS.Model.extend({
  avatar_url: DS.attr('string'),
  ident: DS.attr('string'),
  location: DS.attr('string'),
  nickname: DS.attr('string'),
});
