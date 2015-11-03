import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var project = this.store.createRecord('project', {
        'nickname': this.get('nickname')
      });
      project.save();
    }
  }
});
