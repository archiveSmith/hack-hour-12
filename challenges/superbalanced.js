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

  function height(node, leftHeight = 0, rightHeight = 0) {
    if (!node) return 0;
    height(node.left, leftHeight+=1, rightHeight);
    height(node.right, leftHeight, rightHeight+=1);
    console.log(leftHeight, rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  return height(tree);

}

let bt = new BinaryTree(10);
bt.left =  new BinaryTree(8);
bt.right =  new BinaryTree(12);
bt.right.right =  new BinaryTree(15);
bt.left.left =  new BinaryTree(6);
bt.left.right =  new BinaryTree(7);
bt.left.left.left =  new BinaryTree(4);

console.log(JSON.stringify(bt));
console.log(superbalanced(bt));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
