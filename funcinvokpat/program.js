//Create myObject. It has a value and increment
//method. the increment method takes an optional
//parameter. If the argument is not a number, then 1
//is used as the default

var myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.increment();
document.write(myObject.value); // 1

myObject.increment(2);
document.write(myObject.value); // 3

// Augment myObject with a double method.

var add = function (a, b) {
  return a + b;
};

myObject.double = function () {
  var that = this; // Workaround

  var helper = function () {
    that.value = add(that.value, that.value);
  };

  helper(); // INvoke helper as a function.
};

// Invoke double as a mthod.

myObject.double();
document.write(myObject.value);