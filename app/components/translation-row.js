import Ember from 'ember';

export default Ember.Component.extend({
  translation: null,
  classNames: ['TranslationRow'],
  store: Ember.inject.service(),

  actions: {
    updateTranslation: function(translation, catalog) {
      translation.save(function() {

      });
    },
    rollbackTranslation: function(translation) {
      translation.rollback();
    },
  }
});
