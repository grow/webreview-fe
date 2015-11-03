/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });
  app.import('bower_components/base/dist/css/base.min.css');
  return app.toTree();
};
