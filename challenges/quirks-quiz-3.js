// https://docs.google.com/forms/d/e/1FAIpQLSekmABplhxWXm9sdVJoxo9bS-9IANpyAQ4008kOkgli3-sHWA/viewform?c=0&w=1



// 1)
// var f = function g() { return 23; };
// typeof g();


// 2)
// (function f(f) {
//   return typeof f();
// })(function() {return 1;});



// 3)
// var foo = {
//   bar: function() { return this.baz; },
//   baz: 1
// }
// typeof (f = foo.bar)();


// 4)
// var f = (function f() {return "1"}, function g() {return 2;})();
// typeof f;


// 5)
// (function(foo) {
//   return typeof foo.bar;
// })({ foo: {bar: 1}});


// 6)
// function f() {return f;}
// new f() instanceof f;


// 7)
// with (function(x, undefined){}) length;


// 8)
// var myObject = {
//   foo: "bar",
//   func: function() {
//     var self = this;
//     console.log("outer func. this.foo = " + this.foo);
//     console.log("outer func. self.foo = " + self.foo);
//     (function() {
//       console.log("inner func. this.foo = " + this.foo);
//       console.log("inner func. self.foo = " + self.foo);
//     }())
//   }
// }
// myObject.func();


// 9)
// var a={},
//   b={key:'b'},
//   c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);


// 10)
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));




//
//
//
//
//
//
//
//
// ANSWERS
//
//
//
//
//
//
//
// http://kourge.net/node/130





// 1)
// var f = function g() { return 23; };
// typeof g();

// The answer is that an error will occur.
// This is because function g(){ return 23; } is a function expression (a named one, in fact),
// not a function declaration.
// The function is actually bound to the variable f, not g.




// 2)
// (function f(f) {
//   return typeof f();
// })(function() {return 1;});

// "number"
// 1. a function definition is used in a function expression argument
// 2. that arugument is invoked (using the parens), returning "1"
// 3. typeof 1 is a "number"





// 3)
// var foo = {
//   bar: function() { return this.baz; },
//   baz: 1
// }
// typeof (f = foo.bar)();

// "undefined"
// 1. f is equal the foo object function
// 2. however,  this refers to the current context object
// 3. foo.bar is stored into f and then called, 
// so the this in foo.bar refers to the global object, which does not contain the property baz.





// 4)
// var f = (function f() {return "1"}, function g() {return 2;})();
// typeof f;

// "number"
// 1. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
// 2. IIFE returns 2





// 5)
// (function(foo) {
//   return typeof foo.bar;
// })({ foo: {bar: 1}});

// undefined
// 1. a 1-level nested objected literal is passed in an IIFE arguement
// 2. the poperty of the object is searching for "bar" in the root level
// 3. because "bar" is 1-level nested, foo.bar = undefined
// 4. typeof returns the string "undefined" for the primitive value undefined (i.e. not "string")





// 6)
// function f() {return f;}
// new f() instanceof f;

// 'false'
// 1. The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
// 2. instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor





// 7)
// with (function(x, undefined){}) length;

// -> 2
// 1. The with statement extends the scope chain for a statement. with statement specifies that the object is the default object
// * the with statement is not recommended, as it may be the source of confusing bugs and compatibility issues.
// 2. The answer is 2. The above can be rewritten as: (function(x, undefined){}).length; 
// 3. Each function has a length property (Function.length) that indicates the number of arguments it takes.





// 8)
// var myObject = {
//   foo: "bar",
//   func: function() {
//     var self = this;
//     console.log("outer func. this.foo = " + this.foo);
//     console.log("outer func. self.foo = " + self.foo);
//     (function() {
//       console.log("inner func. this.foo = " + this.foo);
//       console.log("inner func. self.foo = " + self.foo);
//     }())
//   }
// }
// myObject.func();

// outer func. this.foo = bar
// outer func. self.foo = bar
// inner func. this.foo = undefined
// inner func. self.foo = bar
// *the this keyword is typically refers to the context of the object in which it is called





// 9)
// var a={},
//   b={key:'b'},
//   c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);

// 456
// property names are strings, but your b and c are objects. Therefore, they are stringified to "[object Object]"
// so, a[c] overwrites a[b] because they both have the key of "[object Object]"




// 10)
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s
// 1. first line creates an array of length 4
// 2. then, reverse method reverses in place and returns that array (arr1, arr2 are duplicates)
// 3. then, arr3 is an array of length 5
// 4. then, arr3 is a nested 5th value of arr2
