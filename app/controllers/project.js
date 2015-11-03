import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      console.log('creating', this.get('project.nickname'));
      var project = this.store.createRecord('project', {
        'nickname': this.get('nickname')
      });
      project.save();
    }
  }
});
