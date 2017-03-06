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
  if (tree === null) {
    return 0;
  }
  const leftSide = superbalanced(tree.left);
  if (leftSide === -1) {
    return false;
  }
  const rightSide = superbalanced(tree.right);
  if (rightSide === -1) {
    return false;
  }
  const diff = leftSide - rightSide;
  if (Math.abs(diff) > 1) {
    return false;
  }
  const res = 1 + Math.max(leftSide, rightSide);

  return res !== -1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
