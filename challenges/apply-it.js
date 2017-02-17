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
  // Build up funcString starting with func(
  let funcString = 'func(';

  // Loop through arguments in ascending order
  args.forEach((arg, index, args) => {
    // Concat each argument wrapped by quotation marks
    funcString += `'${arg}'`;

    // Concat comma after each argument except last
    if (index < args.length - 1) funcString += ',';
  });

  // Concat )
  funcString += ')';

  // Return callback that returns evaluation of funcString
  return () => eval(funcString);
}

module.exports = applyIt;
