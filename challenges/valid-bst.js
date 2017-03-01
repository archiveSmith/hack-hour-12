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
  function makeArray(node) {
    if (!node) return [];
    return [...makeArray(node.left), node.value, ...makeArray(node.right)];
  }

  const entireArray = makeArray(tree);
  for (let i = 1; i < entireArray.length; i += 1) {
    if (entireArray[i] < entireArray[i - 1]) return false;
  }

  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
