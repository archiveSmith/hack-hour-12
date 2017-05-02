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

function validBST(BST) {

  function isValid(tree, min, max) {
    if (!tree) return true;

    if (tree.value > min && tree.value < max &&
        isValid(tree.left, min, tree.value) &&
        isValid(tree.right, tree.value, max)) {
        return true;
    }
    return false;
  }
  return isValid(BST, -Infinity, Infinity);
}


let bt = new BinaryTree(11);
bt.left = new BinaryTree(9);
bt.left.right = new BinaryTree(10);
bt.left.left = new BinaryTree(8);
bt.right = new BinaryTree(13);
bt.right.left =  new BinaryTree(12);
bt.right.right =  new BinaryTree(14);

console.log(JSON.stringify(bt));


console.log(validBST(bt));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
