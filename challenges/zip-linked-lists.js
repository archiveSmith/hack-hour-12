/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

  function Node(val) {
    this.value = val;
    this.next = null;
  }
  // if both of them is empty 
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  //set up an emty link list start with l1;
  let result = new Node(l1.value)
  l1 = l1.next;
  let startWith1 = false;
  let currentNode = result;

  //while loop
  while (l1 || l2) {
    if (!l1) {
      currentNode.next = l2;
      break;
    } else if (!l2) {
      currentNode.next = l1;
      break;
    } else {

        if (startWith1) {
          currentNode.next = new Node(l1.value)
          l1 = l1.next;
          startWith1 = false;

        } else {
          currentNode.next = new Node(l2.value)
          l2 = l2.next;
          startWith1 = true;
        }
    }
    currentNode = currentNode.next;
  }

  return result;
};

// let l2 = new Node(2);
// l2.next = new Node(4);
// l2.next.next = new Node(6);

// let l1 = new Node(1);
// l1.next = new Node(3);
// l1.next.next = new Node(5);

// var result = zip(l1, l2)
// console.log(result.next.next.next.next)

module.exports = {Node: Node, zip: zip};
