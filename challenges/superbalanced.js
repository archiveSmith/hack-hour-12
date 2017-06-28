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

function getLevels(tree) {
  function helper(tree) {
    if (!tree) return 0;
    return 1 + Math.max(getLevels(tree.left), getLevels(tree.right));
  }

  if (tree) {
    const leftLevels = helper(tree.left);
    const rightLevels = helper(tree.right);

    return 1 + Math.max(leftLevels, rightLevels);
  }

  return 0;
}

function superbalanced(tree) {
  if (!tree) return true;

  const leftLevels = getLevels(tree.left);
  const rightLevels = getLevels(tree.right);

  if (Math.abs(leftLevels - rightLevels) > 1) return false;

  return superbalanced(tree.left) && superbalanced(tree.right);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
