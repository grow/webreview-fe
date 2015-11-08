import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    var siteTitle = 'Web Review';
    if (tokens.length) {
      return tokens.join(' – ') + ' – ' + siteTitle;
    } else {
      return siteTitle;
    }
  },
  model: function() {
    return Ember.RSVP.hash({
      me: this.store.findRecord('user', 'me'),
    });
  },
});
