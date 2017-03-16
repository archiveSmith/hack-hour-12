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
    function inside(x_cor,y_cor,r_val,pointA_x, pointA_y, pointB_x, pointB_y) {
        //checking if the point is inside a circle
        let inA = ((Math.pow(pointA_x - x_cor, 2) + Math(pointA_y - y_cor, 2)) < r_val)
        let inB = ((Math.pow(pointB_x - x_cor, 2) + Math(pointB_y - y_cor, 2)) < r_val)
        if ((inA && !inB) || (inB && !inA)) {
            return true;
        }
        return false;
    }

    let result = 0;

    for (let i = 0; i < x.length; i++) {
        if (inside(x[i], y[i], r[i], start_x, start_y, end_x, end_y)) {
            result++;
        }
    }
}

module.exports = circleCountry;
