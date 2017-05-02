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

function getHeight(bst) {
  if (bst == null) {
    return 0;
  }
  return 1 + Math.max(getHeight(bst.left), getHeight(bst.right));
}

function superbalanced(bst) {
  if (bst === null) {
    return true;
  }

  const diff = Math.abs(getHeight(bst.left) - getHeight(bst.right));

  return diff <= 1 && superbalanced(bst.left) && superbalanced(bst.right);
}

// let bt = new BinaryTree(10);
// bt.left =  new BinaryTree(8);
// bt.right =  new BinaryTree(12);
// bt.right.right =  new BinaryTree(15);
// bt.left.left =  new BinaryTree(6);
// bt.left.right =  new BinaryTree(7);
// bt.left.left.left =  new BinaryTree(4);
// console.log(JSON.stringify(bt));
// console.log(superbalanced(bt));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
