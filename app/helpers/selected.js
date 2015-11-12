import Ember from 'ember';

export default Ember.Handlebars.registerHelper('selected', function(value, options) {
  var result = options.fn(value);
  console.log(value, result, options);
  if (result) {
    var regex = new RegExp(' value=\"' + value + '\"');
    return result.replace(regex, '$& selected="selected"');
  }
  return result;
});
