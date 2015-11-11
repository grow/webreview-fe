import Ember from 'ember';

export default Ember.Component.extend({
  translation: null,
  classNames: ['TranslationRow'],
  store: Ember.inject.service(),

  actions: {
    updateTranslation: function(translation, catalog) {
      translation.set('sha', catalog.get('sha'));
      translation.set('ref', catalog.get('ref'));
      translation.set('locale', catalog.get('locale'));
      translation.save().then(function() {

      }.bind(this), function(errors) {
        
      }.bind(this));
    },
    rollbackTranslation: function(translation) {
      translation.rollback();
    },
  }
});
