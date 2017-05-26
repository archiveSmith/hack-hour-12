/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// flatten array approach
function validBST(tree) {
  // flattens tree into an array
  // create a recursive function 'makeArray' that returns an array and accepts a tree node as an input
  function makeArray(node) {
    // base case: if no node/falsey input, return empty array
    // (return must be an array because of the use of the spread syntax)

    // return an array with three values
    // the middle value is the current node's value
    // the left and right values are the recursive results (arrays) of the left and right node
    // use spread syntax to expand the results

  }
  // invoke the resursive function and store the array
  const entireArray = makeArray(tree);

  // check if it is in order
  // iterate begining at the 2nd value (i = 1) and compare each val with previous
  // if the current val is less the the previous val, exit return false
  // if loop completes, return false

}


const btTrue1 = {
  value: 2,
  left: { value: 1 },
  right: { value: 3 },
};

const btFalse1 = {
  value: 2,
  left: { value: 3 },
  right: { value: 1 },
};

const btTrue2 = {
  value: 2,
  left: {
    value: 1,
    left: { value: -1 },
  },
  right: {
    value: 3,
    right: {
      value: 6,
      left: {
        value: 5,
      },
      right: {
        value: 7,
      }
    }
  },
};

const btFalse2 = {
  value: 2,
  left: {
    value: 1,
    left: { value: -1 },
  },
  right: {
    value: 3,
    right: {
      value: 6,
      left: {
        value: 7,
      },
      right: {
        value: 7,
      }
    }
  },
};

console.log(validBST(btTrue1)); // -> true
console.log(validBST(btFalse1)); // -> false
console.log(validBST(btTrue2)); // -> true
console.log(validBST(btFalse2)); // -> false

// The “flatten tree” approach uses a recursive function to convert the binary tree into an array.

// Then we check to see if that array is in ascending order.

// Checking to see if an array is in order is not too difficult, so we’ll set that up first:

// Because we’ll be comparing neighboring values, we’ll setup a for loop to iterate through an array beginning at the 2nd value aka the index of 1.

// If the for loop completes, we will return true, therefor we must setup an exiting condition that must evaluate to false.

// In this case, that is if the current value is somehow less than the previous value, return false.


// The more difficult part is how to we “flatten” array. More precisely, how do we traverse a binary in order, and push it’s values in to an array?

// The first tool we’ll use is recursion, because recursion uses the call stack for last in, last out evaluation.

// Let’s set that up.

// The second tool we’ll use is spread syntax. Spread syntax allows an expression to be expanded. Commonly used for multiple arguments, it can also be used for multiple elements in an array literal.

// DEMONSTRATE

// We’ll recursively return arrays which will be dropped into an array with spread syntax. The base case will be when we hit the end of a branch which we’ll return an empty array.

// For the recursive setup, all we have to do is return an array with three values, the left, the current, and the right. The left and right values will be where are recursive functionality occurs. And because, we are returning an array of multiple elements, the spread syntax will help us concat the results.
