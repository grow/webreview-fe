import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    var ownerNickname = transition.params.owner.owner_nickname;
    var projectName = ownerNickname + '/' + params['project_nickname'];
    var promise = this.store.find('project', projectName);

    var self = this;
    promise.then(function() {
      self.store.push({data: {'id': 1, type: 'translation', attributes: {msgid: 'foo', string: 'translated foo'}}})
      self.store.push({data: {'id': 2, type: 'translation', attributes: {msgid: 'bar', string: 'translated bar'}}})
      self.store.push({data: {'id': 3, type: 'translation', attributes: {msgid: 'baz', string: 'translated baz'}}})
      self.store.push({data: {'id': '1', type: 'catalog', attributes: {locale: 'de'}, relationships: {project: {data: {type: 'project', id: '5066549580791808'}}, translations: {data: [{type: 'translation', id: 1}, {type: 'translation', id: 2}, {type: 'translation', id: 3}]}}}});
      self.store.push({data: {'id': '2', type: 'catalog', attributes: {locale: 'fr'}, relationships: {project: {data: {type: 'project', id: '5066549580791808'}}, translations: {data: [{type: 'translation', id: 1}, {type: 'translation', id: 2}, {type: 'translation', id: 3}]}}}});
    });

    return promise;
  }
});
