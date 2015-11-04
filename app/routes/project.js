import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var ownerRouteModel = this.modelFor('owner');
    var ownerNickname = ownerRouteModel.owner.get('nickname');
    var projectName = ownerNickname + '/' + params['project_nickname'];
    return this.store.find('project', projectName);
  }
});
