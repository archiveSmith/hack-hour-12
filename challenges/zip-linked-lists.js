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
  if (!l1) return l1;

  const newLL = new Node(l1.value);
  let newCurr = newLL;

  let currLeft = l1;
  let currRight = l2;


  let currTurn = 'right';
  let currNode = l2;

  while (currNode) {
    console.log(currNode);
    const newNode = new Node(currNode.value);
    newCurr.next = newNode;
    newCurr = newNode;

    if (currTurn === 'right') {
      currTurn = 'left';
      currNode = currLeft.next;
      currRight = currRight.next;
      // currLeft = currLeft.next;
    } else {
      currTurn = 'right';
      currNode = currRight.next;
      currLeft = currLeft.next;
      // currRight = currRight.next;
    }
  }

  // one of the linked lists hit the end

  if (currTurn === 'left') {
    // left has no more nodes
    // append right nodes to new linked list
    while (currRight.next) {
      const newNode = new Node(currRight.next.value);
      newCurr.next = newNode;
      newCurr = newNode;
      currRight = currRight.next;
    }
  } else {
    while (currLeft.next) {
      const newNode = new Node(currLeft.next.value);
      newCurr.next = newNode;
      newCurr = newNode;
      currLeft = currLeft.next;
    }
  }

  return newLL;
};

const l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);

const l2 = new Node(2);
l2.next = new Node(4);
l2.next.next = new Node(6);
l2.next.next.next = new Node(7);

const l3 = zip(l1, l2);
let currNode = l3;
while (currNode) {
  console.log(currNode.value);
  currNode = currNode.next;
}

module.exports = {Node: Node, zip: zip};
