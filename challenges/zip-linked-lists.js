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

function MMMzip(l1, l2) {
  let ziped = null;
  let arrayL1 = [];
  let arrayL2 = [];
  let inter = [];
  if (l1 === null || l2 === null) return;
  if (l1.next === null) {
    l1.next = l2;
    return l1;
  }
  while (l1) {
    arrayL1.push(l1.value);
    l1 = l1.next;
  }
  while (l2) {
    arrayL2.push(l2.value);
    l2 = l2.next;
  }
  arrayL1.forEach((item, idx) => {
    inter.push(item);
    if (arrayL2[idx]) {
      inter.push(arrayL2[idx]);
    }
  });
  inter.forEach(item => {
    if (ziped === null) {
      ziped = new Node(item);
    } else {
      while (ziped.next) {
        
      }
      ziped.next = new Node(item);
    }
  })
};

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  l1.next = zip(l2, l1.next);
  return l1;
}

let l1 = new Node(1);
l1.next = new Node(2);
// l1.next.next = new Node(3);
// l1.next.next.next = new Node(4);
// l1.next.next.next.next = new Node(5);

let l2 = new Node('a');
l2.next = new Node('b');
// l2.next.next = new Node('c');
// l2.next.next.next = new Node('d');

console.log(zip(l1,l2));

module.exports = {Node: Node, zip: zip};
