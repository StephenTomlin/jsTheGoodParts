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