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
  if (!l1 && !l2) return;
  if (l1 && !l2) return l1;
  if (!l1 && l2) return l2;

  console.log('check');
  const head = l1;
  let currNode = head;
  let currPick = l2;
  let nextPick = l2.next;
  while (currPick.next) {
    console.log('currNode: ', currNode.value, 'currPick: ', currPick.value);
    if (currNode.next) {
      let tempNode = currNode.next;
      nextPick = currPick.next;
      currNode.next = currPick;
      currPick.next = tempNode;
      currNode = tempNode;
      currPick = nextPick;
    } else {
      currNode.next = currPick;
      return head;
    }
  }
  currPick.next = currNode.next;
  currNode.next = currPick;

  return head;
};

// let a1 = new Node(1);
// let a2 = new Node(2);
// let a3 = new Node(3);
// let a4 = new Node(4);
// let a5 = new Node(5);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// a4.next = a5;

// let b1 = new Node(10);
// let b2 = new Node(20);
// let b3 = new Node(30);
// let b4 = new Node(40);
// let b5 = new Node(50);
// b1.next = b2;
// b2.next = b3;
// b3.next = b4;
// b4.next = b5;

// console.log(zip(a1, b1));

module.exports = {Node: Node, zip: zip};
