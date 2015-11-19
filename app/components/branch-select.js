import Ember from 'ember';

export default Ember.Component.extend({
  branches: null,

  actions: {
    selectBranch: function() {
      var branch = this.get('element').querySelector('select').value;
      this.sendAction('selectBranch', branch);
    },
  },
});


