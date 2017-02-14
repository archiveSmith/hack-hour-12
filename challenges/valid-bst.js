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
  
  if (this.left === null && this.right === null) return true;
  
  if (this.left.value <= this.value) validLeft = validBST(this.left);
  else validLeft = false;
  
  if (this.right.value > this.value) validRight = validBST(this.right);
  else validRight = false;
  
  if (validLeft && validRight) return true;
  else return false;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
