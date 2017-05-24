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

function validBST(tree) {
  function helperLeft(tree, n, root) {
    if (tree === null) return true;
    if (tree.value > n || tree.value > root) return false;
    return helperLeft(tree.left, tree.value, root) && helperRight(tree.right, tree.value, root);
  }

  function helperRight(tree, n, root) {
    if (tree === null) return true;
    if (tree.value <= n || tree.value <= root) return false;
    return helperLeft(tree.left, tree.value, root) && helperRight(tree.right, tree.value, root);
  }

  return helperLeft(tree.left, tree.value, tree.value) && helperRight(tree.right, tree.value, tree.value);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
