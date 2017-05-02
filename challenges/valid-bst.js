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

const head = new BinaryTree(200);
head.right = new BinaryTree(250);
head.right.right = new BinaryTree(275);
head.right.left = new BinaryTree(225);
head.left = new BinaryTree(150);
head.left.right = new BinaryTree(175);
head.left.left = new BinaryTree(125);
head.left.left.left = new BinaryTree(100);
head.left.left.right = new BinaryTree(135);

function myvalidBST(tree) {

  // base case.. we're at the bottom of a branch
  if (tree.left === null && tree.right === null) return;

  // check left and right values
  if( tree.left && tree.left > tree.value ) return false;
  if( tree.right && tree.right <= tree.value) return false;

  // traverse left if there is a left, otherwise go right
  let branch = tree.left ? tree.left : tree.right;

  console.log('top', tree.value, 'left', tree.left.value, 'right', tree.right.value);

  // check this new branch
  while(branch) {
    if (validBST(branch) === false) return false;
    //+
    // return true;
  }

}


function validBst(BST) {
  function isValid(tree, min, max) {
    // we've reached the end of a branch, which means we've gotten here without breaking a rule
    if(!tree) return true;
    if(tree.value > min &&
       tree.value < max &&
       isValid(tree.left, min, tree.value) &&
       isValid(tree.right, tree.value, max)) {
      return true;
    }
    return false;
  }

  return isValid(BST, -Infinity, Infinity);
}


console.log(validBST(head));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
