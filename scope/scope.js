var foo = function () {
  var a = 3, b = 5;

  var bar = function () {
    var b = 7, c = 11;

// At this point. a is 3, b is 7, and c is 11
    a += b + c;

// At this point, a is 21, b is 7, and c is 11
  };
// at this point, a is 3, b is 5, and c is not defined
  bar();
};

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.

var quo = function (status) {
  return {
    get_status: function () {
      return status;
    }
  };
};

// Make an instance of quo.

var myQuo = quo("amazed");
document.write(myQuo.get_status());

// Define a function that sets a DOM node's color
// to yellow and then fades it to white

var fade = function (node) {
  var level = 1;
  var step = function () {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFFF' + hex + hex;
    if (level < 15) {
      level += 1
      setTimeout(step, 100);
    }
  };
  setTimeout(step, 100)
};

fade(document.body);