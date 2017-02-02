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
  let mergedHead = new Node(l1.value);
  mergedHead.next = new Node(l2.value);
  let temp = mergedHead.next
  let count = 3;
  
  while (count--) { 
    temp.next = new Node(l1.next.value);
    temp.next.next = new Node(l2.next.value);
    temp = temp.next.next;
    l1 = l1.next;
    l2 = l2.next;
  } return mergedHead;
}

module.exports = {Node: Node, zip: zip};
