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
  let checker;
  if (!this.right && this.left) {
    checker = this.left;
    if (checker.left || checker.right) return false;
  }
  if (!this.left && this.right) {
    checker = this.right;
    if (checker.left || checker.right) return false;
  }
  if (this.left) superbalanced(this.left);
  if (this.right) superbalanced(this.right);
  return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
