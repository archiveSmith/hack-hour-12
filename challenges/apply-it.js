/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  var funcCall = "func(";
  var argList = args.map(function(el, i) {
    console.log('first arg', el);
    console.log(`args[${i}]`);
    return `args[${i}]`;
  });
  console.log('arglist', argList);
  funcCall += argList.join(', ') + ');';
  console.log(funcCall);
  return function() {
    return eval(funcCall);
  };
}

module.exports = applyIt;


// build up a string and eval it!
// the end result of funcCall is "func(args[0], args[1], args[2]);"
// yay closures!

var jae = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};
 
var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero());



// it is possible w/ spread operator from node v5
// but this is just syntactic sugar for using apply. they should be able to do it without spreading
// function applyIt(func, args) {
//   return function() {
//     return func(...args);
//   };
// }
