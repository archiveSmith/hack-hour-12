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

// function isBalanced(subTree) {
//   if (subTree === null) return 0;
//   let leftH = isBalanced(subTree.left);
//   if (leftH === -1) return -1;
//   let rightH = isBalanced(subTree.right);
//   if (rightH === -1) return -1;
//   if (Math.abs(leftH - rightH) > 1) return -1;
//   return 1 + Math.max(leftH, rightH);
// }

// function superbalanced(tree) {
//   if (tree) return true;
//   let result = isBalanced(tree);
//   return result > 0 ? true : false;
// }

function superbalanced(tree) {
  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
