import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.attr('string'),
  ident: DS.attr('string'),
  locale: DS.attr('string'),
  msgid: DS.attr('string'),
  ref: DS.attr('string'),
  sha: DS.attr('string'),
  string: DS.attr('string'),

  project_owner_nickname: function() {
    var ident = this.get('ident');
    return ident.split('/')[0];
  }.property('ident'),

  project_nickname: function() {
    var ident = this.get('ident');
    return ident.split('/')[1];
  }.property('ident'),
});
