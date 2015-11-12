import DS from 'ember-data';

export default DS.Model.extend({
  ident: DS.attr('string'),
  project: DS.belongsTo('project'),
  users: DS.hasMany('membership'),
  domains: DS.hasMany('membership'),

  is_empty: function() {
    var users = this.get('users').length;
    var domains = this.get('domains').length;
    return !users && !domains;
  }.property('users', 'domains'),
});
