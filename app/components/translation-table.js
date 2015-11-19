import Ember from 'ember';

export default Ember.Component.extend({
  translations: null,

  search: null,

  selectedOrder: 'ALL',
  orderChoices: [
    {'caption': 'Original', 'value': 'ALL'},
    {'caption': 'Untranslated first', 'value': 'UNTRANSLATED'},
  ],

  selectedShow: 'ALL',
  showChoices: [
    {'caption': 'All', 'value': 'ALL'},
    {'caption': 'Untranslated', 'value': 'UNTRANSLATED'},
    {'caption': 'Translated', 'value': 'TRANSLATED'},
  ],

  filter_: function(translation) {
    var enabled = false;

    switch (this.get('selectedShow')) {
      case 'ALL':
        enabled = true;
        break;
      case 'UNTRANSLATED':
        enabled = !translation.get('string');
        break;
      case 'TRANSLATED':
        enabled = translation.get('string');
        break;
    };

    var query = this.get('search');
    if (query) {
      var string = translation.get('string');
      var msgid = translation.get('msgid');
      var test = (string + msgid).toLowerCase();
      query = query.toLowerCase();
      enabled = test.indexOf(query) > -1;
    }

    return enabled;
  },

  filteredTranslations: function() {
    return this.get('translations').filter(this.filter_.bind(this));
  }.property('translations', 'selectedOrder', 'selectedShow', 'search'),

  actions: {
    updateSearch: function() {
      var val = this.get('element').querySelector('input').value;
      this.set('search', val);
    },
    updateSelected: function(selected) {
      var val = this.get('element').querySelector('[data-id=' + selected + ']').value;
      this.set(selected, val);
    },
  },
});
