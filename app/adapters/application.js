import DS from 'ember-data';

export default DS.Adapter.extend({
  primaryKey: 'ident',
  _request: function(method, body, opt_multi) {
    var self = this;
    var req = {};
    req[this.kind] = body;
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
        var key = opt_multi ? self.namespace : self.kind;
        var resp = data.responseJSON;
        var data = {};
        if (data.responseJSON && data.responseJSON[key]) {
          data[key] = data.responseJSON[key];
        } else {
          data[key] = opt_multi ? [] : {};
        }

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

  findRecord: function(store, type, id, snapshot) {
    var body = {'nickname': id};
    return this._request('owners.get', body);
  }
});
