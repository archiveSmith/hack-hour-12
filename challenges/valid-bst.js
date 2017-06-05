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

// O(n) time and O(n) space
function validBST(tree) {
  // flattens tree into an array
  function makeArray(node) {
    if (!node) return [];
    return [...makeArray(node.left), node.value, ...makeArray(node.right)];
  }
  const entireArray = makeArray(tree);
  console.log(entireArray)

  // check if it is in order
  for (let i = 1; i < entireArray.length; i++) {
    if (entireArray[i] < entireArray[i - 1]) return false;
  }
  return true;
}

// Min/max solution
// O(n) time and O(1) space
function validBSTalternate(tree) {
  if (tree instanceof BinaryTree === false) return 'bad input';

  function isValid(tree, min, max) {
    if (!tree) return true;

    if (tree.value > min &&
        tree.value < max &&
        isValid(tree.left, min, tree.value) &&
        isValid(tree.right, tree.value, max)) {
        return true;
    }
    return false;
  }
  return isValid(tree, -Infinity, Infinity);
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

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
