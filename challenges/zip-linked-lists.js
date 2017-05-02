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
  let left = l1;
  let right = l2;
  if (left) {
    while (left && right) {
      const nextL = left.next;
      const nextR = right.next;
      left.next = right;
      if (nextL) right.next = nextL;
      left = nextL;
      right = nextR;
    }
    return l1;
  }
  return l2;
}

module.exports = {Node: Node, zip: zip};

// const l = new Node(10);
// l.next = new Node(9);
// l.next.next = new Node(8);
// l.next.next.next = new Node(7);
// l.next.next.next.next = new Node(6);

// const r = new Node(1);
// r.next = new Node(2);
// r.next.next = new Node(3);
// r.next.next.next = new Node(4);
// r.next.next.next.next = new Node(5);

// console.log('zipped', JSON.stringify(zip(l, r), null, 2));
