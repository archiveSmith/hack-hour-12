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

// create a function with 2 arguments: a function and an array
// it will return a function
// use "eval", template literals, and "join" convert the array to a string
const applyIt = (func, args) => () => eval(`func("${args.join('","')}")`);


// Test 1
const jae = (name, age, location) => `${name} is ${age} and he lives in ${location}`;

const jaero = applyIt(jae, ['Jae', 19, 'South Carolina']);

// Test 2
const jasmine = (name, age) => {
  if (!age) return `We don't know how old ${name} is!`;
  return `${name} is ${age} years old!`;
};

const jmoney = applyIt(jasmine, ['Jasmine']);


// Log Tests
console.log(jaero()); // Returns "Jae is 19 and he lives in South Carolina"
console.log(jmoney()); // Returns "We don't know how old Jasmine is!"

module.exports = applyIt;
