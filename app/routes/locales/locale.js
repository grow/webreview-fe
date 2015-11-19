import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var locale = params.locale;
    var ownerRouteModel = this.modelFor('owner');
    var ownerNickname = ownerRouteModel.owner.get('nickname');
    var projectRouteModel = this.modelFor('project');
    var projectNickname = projectRouteModel.get('nickname');
    var localeRouteModel = this.modelFor('locales');
    var branch = localeRouteModel.branch;
    var catalogId = ownerNickname + '/' + projectNickname + '/'
        + locale + '/' + branch;
    return Ember.RSVP.hash({
      errors: null,
      catalog: this.store.findRecord('catalog', catalogId)
    });
  },

  actions: {
    handleErrors: function(errors) {
      this.set('errors', errors);
    },
  },

  error: function(error, transition) {
    this.set('model.errors', error.errors);
    return true;
  },
});
