// Functions are values, and we can manipulate function values
// in interesting ways. Currying allows us to produce a new function
// by comining a function and an argument

var add1 = add.curry(1);
document.write(add1(6));

// add1 is a function that was created by pausing 1 to add's curry method.
// The add1 function adds 1 to its argument. Javascript does not have a curry
// method, but we can fix that by augmenting Function.prototype:

Function.method('curry', function () {
  var slice = Array.prototype.slice,
      args  = arguments,
      that  = this;
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});