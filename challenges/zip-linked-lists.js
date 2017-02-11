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

// const list1 = new Node('A');
// list1.next = new Node('B');
// list1.next.next = new Node('C');

// const list2 = new Node('1');
// list2.next = new Node('2');
// list2.next.next = new Node('3');
// list2.next.next.next = new Node('4');
// list2.next.next.next.next = new Node('5');




function zip(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.value < l2.value) {
    l1.next = zip(l1.next, l2);
    return l1;
  } else {
    l2.next = zip(l1, l2.next);
    return l2;
  }
}

// let node = zip(list1, list2);
// while (node) {
//   console.log(node.value);
//   node = node.next;
// }

module.exports = {Node: Node, zip: zip};
