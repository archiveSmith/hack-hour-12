/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  let maxDepth = 0;
  // recursive helper
  function recurse(bst, depth = 0) {
    if (depth > maxDepth) maxDepth = depth;
    if (bst.left) recurse(bst.left, depth + 1);
    // console.log(bst.value, "depth: ", depth);
    if (bst.right) recurse(bst.right, depth + 1);
    // if (!bst.left && !bst.right) return true;
    return Math.abs(maxDepth - depth) <= 1;
  }

  return recurse(tree);
}

// let b1 = new BinaryTree(5);
// let b2 = new BinaryTree(2);
// let b3 = new BinaryTree(1);
// let b4 = new BinaryTree(3);
// let b5 = new BinaryTree(8);
// let b6 = new BinaryTree(7);
// let b7 = new BinaryTree(6);
// let b8 = new BinaryTree(9);

// b1.left = b2;
// b2.left = b3;
// b2.right = b4;
// b1.right = b5;
// b5.right = b8;
// b5.left = b6;
// b6.left = b7;

// console.log(superbalanced(b1));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
