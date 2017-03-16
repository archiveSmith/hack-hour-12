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

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let startOrFinishInside = 0;
  let numCircles = x.length;
  let i;
  let bordersToCross = 0;
  for (i = 0; i < numCircles; i += 1) {
    let startIn = false;
    let finishIn = false;
    let startDistance = Math.pow((start_x - x[i]), 2) + Math.pow((start_y - y[i]), 2);
    let finishDistance = Math.pow((end_x - x[i]), 2) + Math.pow((end_y - y[i]), 2);
    if (startDistance < Math.pow(r[i], 2)) startIn = true;
    if (finishDistance < Math.pow(r[i], 2)) finishIn = true;
    if (startIn !== finishIn) bordersToCross += 1;
  }
  return bordersToCross;
}

module.exports = circleCountry;
