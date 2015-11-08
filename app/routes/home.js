import Ember from 'ember';
import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  titleToken: 'Projects',
  model: function() {
    return this.store.findAll('project');
  }
});
