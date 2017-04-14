/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountryOriginal(x, y, r, start_x, start_y, end_x, end_y) {
  // check to see if starting point is inside a district
    // check the starting point againt each district coordinates with r as the diff
  // if we are inside a district, output += 1
  // do the same for the end 

  let borders = 0;

  for (let i = 0; i < x.length; i += 1) {
    if (Math.abs(x[i] - start_x) < r[i] && Math.abs(y[i] - start_y) < r[i]) borders += 1; 
    if (Math.abs(x[i] - end_x) < r[i] && Math.abs(y[i] - end_y) < r[i]) borders += 1; 
  }
  return borders;
}

// provided solution
function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  // Iterating through all circles, reducing to a count of # of times a border was crossed.
  return r.reduce((acc, rad, i) => {
    // Distance from current circle center at the start.
    const startDistance = Math.hypot(x[i] - start_x, y[i] - start_y)
    // Distance from current circle center at the end.
    const endDistance = Math.hypot(x[i] - end_x, y[i] - end_y)
    // If radius is in between startDistance and endDistance, increase counter.
    return (startDistance > rad && rad > endDistance) || (startDistance < rad && rad < endDistance) ? ++acc : acc
  }, 0)
}

// var x = [1, 3, 2, 3];
// var y = [1, 2, 4, 2];
// var r = [1, 1, 0.5, 0.5];

// var start_x = 1;
// var start_y = 1;
// var end_x = 3;
// var end_y = 2;

// var start_x2 = 6;
// var start_y2 = 2;
// var end_x2 = 2;
// var end_y2 = 1;

// console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y)) // -> 3
// console.log(circleCountry(x, y, r, start_x, start_y, end_x2, end_y2)) // -> 2
// console.log(circleCountry(x, y, r, start_x2, start_y2, end_x2, end_y2)) // -> 1


module.exports = circleCountry;
