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
  // return distance between 2 points
  function dist(xC, yC, x, y) {
    const distVec_x = xC - x;
    const distVec_y = yC - y;
    return Math.sqrt(Math.pow(distVec_x, 2) + Math.pow(distVec_y, 2));
  }

  const N_DISTRICTS = x.length;
  let borders = 0;
  // for each circle
  for (let i = 0; i < N_DISTRICTS; i += 1) {
    // check if it covers start or end points
    const start_dist = dist(x[i], y[i], start_x, start_y);
    const end_dist = dist(x[i], y[i], end_x, end_y);

    if ((start_dist <= r[i] && end_dist > r[i]) || (end_dist <= r[i] && start_dist > r[i]) borders += 1;
  }
  return borders;
}

module.exports = circleCountry;
