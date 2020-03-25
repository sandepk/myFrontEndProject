console.clear()
console.log('welcome to arrow function learning !')
//syntax : 
/* (param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; } 

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements } */

// Parenthesize the body of function to return an object literal expression:
//params => ({foo: bar}) 
// -----------------One--------------
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material + " : "+ material.length));
  console.log(materials.map(({length}) => length));//special syntax
  // expected output: Array [8, 6, 7, 9]

  //NOTE : An arrow function does not have its own this; the this value of the enclosing execution context is used.
  var f = () => { 'use strict'; return this; };
console.log( f() === window); // or the global object . true.

var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1)); // This would log to 2 still


var arguments = [1, 2, 3];
var arr = () => arguments[0];

console.log( arr()); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

console.log( foo(3)); // 2
console.clear()
'use strict';

// arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods:
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

console.log(obj.b()); // prints undefined, Window {...} (or the global object)
console.log(obj.c()); // prints 10, Object {...}

/* Keep in mind that returning object literals using the concise body syntax params => {object:literal} will not work 
as expected. */
var func = () => { foo: 1 };  // Calling func() returns undefined!

//Remember to wrap the object literal in parentheses.
var func = () => ({foo: 1}); //great..! It works.
console.log(func()); 

//more examples..
let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);  
// 66

var even = arr.filter(v => v % 2 == 0); 
// [6, 0, 18]

var double = arr.map(v => v * 2);       
// [10, 12, 26, 0, 2, 36, 46]



  
  
  