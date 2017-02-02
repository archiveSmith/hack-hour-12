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
  let mergedHead = new Node(l1.val);
  mergedHead.next = l2;
  mergedHead = mergedHead.next;
  
  while (l2.next) {
    mergedHead.next = l1.next;
    mergedHead.next.next = l2.next;
    mergedHead = mergedHead.next.next;
    l1 = l1.next;
    l2 = l2.next;
  } return mergedHead;
};

module.exports = {Node: Node, zip: zip};
