import DS from 'ember-data';

export default DS.Model.extend({
  avatar_url: DS.attr('string'),
  buildbot_job_id: DS.attr('string'),
  catalogs: DS.hasMany('catalog'),
  description: DS.attr('string'),
  git_url: DS.attr('string'),
  ident: DS.attr('string'),
  name: DS.attr('string'),
  nickname: DS.attr('string'),
  owner: DS.belongsTo('owner'),
  translation_branch: DS.attr('string'),
  transfer: function(newOwner) {
    var adapter = this.store.adapterFor(this.constructor.typeKey);
    var project = this.serialize();
    return adapter.transfer(project, newOwner);
  }
});
