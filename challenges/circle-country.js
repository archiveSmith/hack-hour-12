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
  // how many circles is start point inside (is distance from start point to center of circle less than circle radius)
  // of the circles start point is inside, how many is the end point outside of (distance from end point to circle center is greater than circle radius)
  // how many circles is start point outside
  // of the circles start point is outside, how many is the end point inside of
  // add together for final result
  let crossedBorders = 0;

  r.forEach((radius, i) => {
    const startDist = Math.hypot(x[i] - start_x, y[i] - start_y);
    const endDist = Math.hypot(x[i] - end_x, y[i] - end_y);

    if (startDist < radius && endDist > radius || startDist > radius && endDist < radius) {
      crossedBorders++;
    }
  });

  return crossedBorders;
}

module.exports = circleCountry;
