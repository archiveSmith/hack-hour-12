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
  let validLeft = true;
  let validRight = true;
  
  if (tree.left === null && tree.right === null) return true;
  
  if (tree.left.value <= tree.value) validLeft = validBST(tree.left);
  else validLeft = false;
  
  if (tree.right.value > tree.value) validRight = validBST(tree.right);
  else validRight = false;
  
  if (validLeft && validRight) return true;
  else return false;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
