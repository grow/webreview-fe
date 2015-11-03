import DS from 'ember-data';

export default DS.Adapter.extend({
  _request: function(method, body) {
    var self = this;
    var req = {};
    req[this.kind] = body;
    var url = '/_api/' + this.namespace + '.' + method;
    var jqReq = {
      type: 'POST',
      url: url,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(req) 
    };

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(jqReq).then(function(data) {
        var data = {};
        data[self.kind] = data.responseJSON[self.kind];
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null;
        var resp = jqXHR.responseJSON;
        console.log(resp['error_message'])
        Ember.run(null, reject, jqXHR);
      });
    });
  },

  findRecord: function(store, type, id, snapshot) {
    var body = {'nickname': id};
    return this._request('get', body);
  }
});
