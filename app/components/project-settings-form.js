import Ember from 'ember';

export default Ember.Component.extend({
  project: null,
  newOwner: null,
  enableTransferForm: false,
  transferErrors: null,
  actions: {
    setTransferFormEnabled: function(enabled) {
      this.set('enableTransferForm', enabled);
    },
    transfer: function(newOwnerNickname) {
      var project = this.get('project');
      var newOwner = {'nickname': newOwnerNickname};
      project.transfer(newOwner).then(function() {
        this.set('transferErrors', null);
      }.bind(this), function(errors) {
        this.set('transferErrors', errors.errors);
      }.bind(this));
    },
    update: function() {
      var project = this.get('project');
      project.save().then(function() {
        this.sendAction('projectUpdated', project);
      }.bind(this), function(errors) {
        this.set('errors', errors.errors);
      }.bind(this));
    },
  },
});
