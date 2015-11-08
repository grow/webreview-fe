import Ember from 'ember';

export default Ember.Component.extend({
  project: null,
  store: Ember.inject.service(),

  actions: {
    createProject: function() {
      var project = this.get('project');
      var store = this.get('store');
      var me = store.findRecord('user', 'me');
      me.then(function() {
        var owner = store.createRecord('owner');
        owner.set('nickname', me.get('nickname'));
        project.set('owner', owner);
        project.save().then(function() {
          this.sendAction('projectCreated', project);
        }.bind(this), function(errors) {
          this.set('errors', errors.errors);
        }.bind(this));
      }.bind(this));
    },
  },
});
