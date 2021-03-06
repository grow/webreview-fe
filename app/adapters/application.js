import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({
  primaryKey: 'ident',
  _request: function(method, req) {
    var self = this;
    var url = '/_api/' + method;
    var jqReq = {
      type: 'POST',
      url: url,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(req)
    };

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(jqReq).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null;
        var resp = jqXHR.responseJSON;
        var errors = [{
          'detail': resp['error_message']
        }];
        var error = new DS.InvalidError(errors);
        Ember.run(null, reject, error);
      });
    });
  },
});
