import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var project = this.modelFor('project');
    var query = {
      'fileset': {
        'project': {
          'ident': project.get('ident'),
        },
      },
    };
    var filesets = this.store.query('fileset', query);
    return Ember.RSVP.hash({
      filesets: filesets,
    });
  },
  actions: {
    deleteFileset: function(fileset) {
      fileset.destroyRecord().then(function() {
      }.bind(this), function(errors) {
        membership.rollback();
        this.set('errors', errors.errors);
      }.bind(this))
    },
  },
});
