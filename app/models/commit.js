import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('actor'),
  branch: DS.attr('string'),
  message: DS.attr('string'),
  sha: DS.attr('string'),

  sha_short: function() {
    var sha = this.get('sha');
    return sha && sha.slice(0, 6);
  }.property('sha'),
});
