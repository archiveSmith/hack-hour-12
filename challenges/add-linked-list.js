/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
const l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(7);
l2.next.next.next = new Node(8);


function addLinkedList(l1, l2) {
  // pick which linked list will be primary
  let list1 = null;
  let list2 = null;
  let lastNode;
  let sumList;

  if( l1.value ) {
    // make sure list 1 is valid
    list1 = l1;
    list2 = l2;
  } else if (l2) {
    // if it isn't, and list 2 is valid, just return it
    return l2;
  } else {
    // it's all garbage, we're out
    return;
  }

  while (list1 ||  list2) {
    // get the value from a valid list
    let value = list1 ? list1.value : 0;
    value += list2 ? list2.value : 0;

    // create the new node
    node = new Node(value);

    // if we're the first node, create the list
    // otherwise, keep it going
    if(lastNode) lastNode.next = node;
    else sumList = node;

    // walk the lists
    lastNode = node;
    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }

  return sumList;

}

let sl = addLinkedList(l1,l2);
while(sl) {
  console.log(sl.value);
  sl = sl.next;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
