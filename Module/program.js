
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};

String.method('deentityify', function () {

  // The entity table. It maps entity names to
  // characters

  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

// return the deentityify method.
  return function () {
    // This is the deentityify method. It calls the string
    // replace method, looking for substrings that start
    // with '&' and end with ';'. If the characters in
    // between are in the entity table, then replace the
    // entity with the character from the table. It uses
    // a regular expression (Chapter 7)
    return this.replace(/&([^&;]+);/g,
      function (a, b) {
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      }
    );
  }
}());

document.write('&lt;&quot;&gt;'.deentityify()); // <">

var serial_maker = function () {

  // Produve an object that produces unique strings. A
  // unique string is made up of two parts: a prefix
  // and a sequence number. The object comes with
  // methods for setting the prefix and sequence
  // number, and a gensym method that produces unique
  // strings.

  var prefix = '';
  var seq = 0;
  return {
    set_prefix: function (p) {
      prefix = String(p);
    },
    set_seq: function (s) {
      seq = s;
    },
    gensym: function (s) {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  };
};
var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();  //unique is "Q1000"
document.write(unique)

document.getElementById('myBoxDiv')
  .move(150, 150)
  .width(100)
  .height(100)
  .color('red')
  .border('10px outset')
  .padding('4px')
  .appendText("Please stand by")
  .on('mousedown', function (m){
    this.startDrag(m, this.getNinth(m));
  })
  .on('mousemove','drag')
  .on('mouseup', 'stopDrag')
  .later(2000, function () {
    this
      .color('yellow')
      .setHTML("What hath God wraught?")
      .slide(400, 40, 200, 200);
  })
  tip('This box is resizeable')