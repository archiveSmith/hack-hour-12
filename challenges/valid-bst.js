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
    const arr = [];
    function inOrder(tree) {
        if (tree.left) inOrder(tree.left);
        arr.push(tree.value)
        if (tree.right) inOrder(tree.right);
    }
    inOrder(tree);
    for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

// let b1 = new BinaryTree(5);
// let b2 = new BinaryTree(2);
// let b3 = new BinaryTree(4);
// let b4 = new BinaryTree(3);
// let b5 = new BinaryTree(8);
// let b6 = new BinaryTree(7);
// let b7 = new BinaryTree(6);
// let b8 = new BinaryTree(9);

// b1.left = b2;
// b2.left = b3;
// b2.right = b4;
// b1.right = b5;
// b5.right = b8;
// b5.left = b6;
// b6.left = b7;

// console.log(validBST(b1));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
