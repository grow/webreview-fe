import Ember from 'ember';

export default Ember.Helper.helper(function(args) {
  console.log(args);
  return args[0] === args[1];
});
