Function.method('new', function () {
  //Create a new object that inherits from
  // constructor's prototype
    var that = Object.create(this.prototype);

    // Invoke the constructor, binding -this- to
    // the new object

    var other = this.apply(that, arguments);

    // If its 'return' value isn't an object ,
    // substitute the new object.

    return (typeof other === 'object' && other) || that;

});

// we can define a constructor and augment its prototype:

var Mammal = function (name) {
  this.name = name
};

Mammal.prototype.get_name = function () {
  return this.name
};

Mammal.prototype.says = fucntion () {
  return this.saying || '';
};

// Now, we can make an instance

var myMammal = new Mammal ('Herb the Mammal');
var name = myMammal.get_name(); // 'herb the Mammal'

// we can make another pseudoclass that inherits from Mammal by defining its
// constructor function and replacing its prototype with an instance of Mammal.

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal

Cat.prototype = new Mammal();

// Augment the new prototype with
// purr and get_name methods.

Cat.prototype.purr = function (n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
};
Cat.prototype.purr = function (n) {
  return this.says() + ' ' + this.name + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says(); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name();
//             'meow Henrietta meow'

Function.method('inherits', function (Parent) {
  this.prototype = new Parent();
  return this;
});

// Our inherits and method methods return this, allowing us to program
// in a cascade style. We can now make our Cat with one statement

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
}.
  inherits(Mammal).
  method('purr', function(n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
      if (s) {
        s += '-';
      }
      s += 'r';
    }
    return s;
  }).
  method('get_name', function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
  });