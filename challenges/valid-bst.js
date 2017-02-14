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

function validBST(tree, lastTreeVal = tree.value) {
    if (!tree.left && !tree.right) return true;
    if (!tree) return true;
    if (tree.value < tree.left.value || tree.left.value < lastTreeVal || tree.value > tree.right.value || tree.right.value > lastTreeVal ) return false;
    return validBST(tree.left) && validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
