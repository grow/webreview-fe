import Ember from 'ember';

export default Ember.Component.extend({
  project: null,
  catalog: null,

  click: function() {
    this.send('catalogSelected');
  },
  classNames: ['CatalogLink'],
  actions: {
    catalogSelected: function() {
      this.sendAction('catalogSelected', this.get('project'), this.get('catalog'));
    },
  },
});
