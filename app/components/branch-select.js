import Ember from 'ember';

export default Ember.Component.extend({
  branches: null,
  actions: {
    selectBranch: function() {
      console.log('selected');
    },
  },
});


