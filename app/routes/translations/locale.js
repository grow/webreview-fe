import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var locale = params.locale;
    var ownerNickname = transition.params.owner.owner_nickname;
    var projectNickname = transition.params.project.project_nickname;
    var catalogId = ownerNickname + '/' + projectNickname + '/' + locale;
    return this.store.findRecord('catalog', catalogId);
  },
});
