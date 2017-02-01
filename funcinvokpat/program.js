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

  helper(); // Invoke helper as a function.
};

// Invoke double as a mthod.

myObject.double();
document.write(myObject.value);

var Quo = function (string) {
  this.status = string;
};

// Give all instances of Quo a public method
// called get_status

Quo.prototype.get_status = function () {
  return this.status;
};

// Make an instance of Quo.

var myQuo = new Quo("confused");

document.write(myQuo.get_status()); // confused

//make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // sum is 7

//Make an object with a status member.

var statusObject = {
  status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
// status is A-OK

// Make a function that adds a lot of stuff.

// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
};

document.write(sum(4,8,15,16,23,43)); //108

var add = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return a + b;
}

// Make a try_it function that calls the new add
// function incorrectly

var try_it = function () {
  try {
    add("seven");
  } catch (e) {
    document.write(e.name + ': ' + e.message);
  }
}

try_it();