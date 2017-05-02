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

// ============= DONT MODIFY ANYTHING BEFORE THIS ===========================================

// function validBST(tree) {
//     // if there are no tree return false
//     if (!tree) return false;

//     // if there are no branch on both left and right
//     if (!tree.left && !tree.right) return true;

//     // if there are only left
//     if (!tree.right) {
//         if (tree.left.value > tree.value) return false;
//         return validBST(tree.left);
//     }

//     // if there are only right
//     if (!tree.left) {
//         if (tree.right.value <= tree.value) return false;
//         return validBST(tree.right);
//     }  

//     if (tree.left.value > tree.value) return false;
//     if (tree.right.value <= tree.value) return false;

//     return validBST(tree.left) && validBST(tree.right)
// } 


// ========================= NEW SOLUTION ======================================

function returnArray(tree, arr = [], pos = -1) {
    // if there are no more left or right branch

    
    // if there are branch left is deadend
    if (tree.left) {
        pos = returnArray(tree.left, arr, pos)
    };
    arr[++pos] = tree.value;
    if (tree.right) {
        pos = returnArray(tree.right, arr, pos);
    };
    return pos;
}


function validBST(tree) {
    let arr = [];
    // go through the tree and return an array of supposed to be sorted tree leaf
    function returnArray(tree, arr = [], pos = -1) {
     
        // if there are branch left is deadend
        if (tree.left) {
            pos = returnArray(tree.left, arr, pos)
        };

        arr[++pos] = tree.value;

        if (tree.right) {
            pos = returnArray(tree.right, arr, pos);
        };

        return pos;
    }

    // check if it actually sorted: true:  validBST return true, false: validBST  return false
    return(tree, arr);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
} 

//============================ GIVEN SOLUTION +=============================

// function validBST(BST) {

//     function isValid(tree, min, max) {
//         if (!tree) return true;

//         if (tree.value > min && tree.value < max) {
//             return true;
//         } 

//         return false;
//     }

//     return isValid(BST, -Infinity, Infinity)
// }


// ===================================TESTING ========================================================

// let tree = new BinaryTree(3);
// tree.left = new BinaryTree(1);
// tree.left.left = new BinaryTree(0);
// tree.right = new BinaryTree(7);
// tree.right.left = new BinaryTree(4);
// tree.right.right = new BinaryTree(8);

// let arr = [];
// value = returnArray(tree, arr);
// console.log(arr);















//==========================================EXPORT==============================================================
module.exports = {BinaryTree: BinaryTree, validBST: validBST};