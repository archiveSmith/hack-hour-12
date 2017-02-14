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
    // if there are no tree return false
    if (!tree) return false;

    // if there are no branch on both left and right
    if (!tree.left && !tree.right) return true;

    // if there are only left
    if (!tree.right) {
        if (tree.left.value > tree.value) return false;
        return validBST(tree.left);
    }

    // if there are only right
    if (!tree.left) {
        if (tree.right.value <= tree.value) return false;
        return validBST(tree.right);
    }  

    if (tree.left.value > tree.value) return false;
    if (tree.right.value <= tree.value) return false;

    return validBST(tree.left) && validBST(tree.right)
} 


let tree = new BinaryTree(3);
tree.left = new BinaryTree(1);
tree.left.left = new BinaryTree(0);
tree.right = new BinaryTree(7);
tree.right.left = new BinaryTree(4);
tree.right.right = new BinaryTree(8);

console.log(validBST(tree))
module.exports = {BinaryTree: BinaryTree, validBST: validBST};