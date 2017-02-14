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
    if (val > this.left.val || val <= this.right.val) return false;
    if (this.left === null || this.right === null) return true;
    
    return validBST(tree.left) && validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
