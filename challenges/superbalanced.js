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

function countHeights(tree) {
  if (!tree) {
    return 0;
  }

  if (!tree.left) {
    return countHeights(tree.right) + 1;
  }

  if (!tree.right) {
    return countHeights(tree.left) + 1;
  }

  return Math.max(countHeights(tree.left) + 1, countHeights(tree.right) + 1)
 }

function superbalanced(tree) {
  if (!tree) return true 

  let cond = Math.abs(countHeights(tree.left) - countHeights(tree.right)) <= 1;
  return cond && superbalanced(tree.right) && superbalanced(tree.left);
}

// TESTING -----
// let tree = new BinaryTree(12);
// tree.left = new BinaryTree(8);
// tree.right = new BinaryTree(15);
// tree.right.right = new BinaryTree(18);
// tree.right.left = new BinaryTree(14);

// tree.left.left = new BinaryTree(5);
// tree.left.right = new BinaryTree(10);
// tree.right.right.right = new BinaryTree(20);
// tree.left.right.right = new BinaryTree(11);
// tree.left.right.left = new BinaryTree(9);
// // tree.right.right.right.right = new BinaryTree(20);
// console.log(countHeights(tree))
// console.log(superbalanced(tree))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
