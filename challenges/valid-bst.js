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

// function validBST(tree) {
//     let arr = [];
//     if(tree.left !== null) {
//         validBST(tree.left);
//         // console.log(tree.value);
//         // arr = arr.concat();
//         validBST(tree.right);
//     }
//     return arr;
// }

// const tree = new BinaryTree(5);
// tree.left = new BinaryTree(3);
// // tree.right = new BinaryTree(2);


// function isValid(tree, min, max) {

//     // base case
//     if(!tree) return null;

//     // Is current value greater than minimum handed down from previous call?
//     if(tree.value > min && tree.value < max && isValid(tree.left, min,tree.value) && isValid(tree.right, tree.value, max)) {
//         return true;
//     }
//     return false;

//     return isValid(BST, -Infinity, Infinity);
// }


// function validBST(tree) {
//     function makeArray(node) {
//         if(!node) return [];
//         return [...makeArray(node.left), node.value, ...makeArray(node.right)];
//     }

//     const entireArray = makeArray(tree);
//     for(let i = 1; i < entireArray.length; i++) {
//         if(entireArray[i] < entireArray[i-1]) return true;
//     }
//     return false;
// }

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
