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

let head = l1;
let currentHead = head;
let current1 = l1.next;
let current2 = l2;
let nextList = current2;

// if(l2 === undefined) {
//   return l1;
// }
// if(l1 === undefined) {
//   return l2;
// }
while(current1 !== null && current2 !== null) {
  if(nextList === current1) {
    currentHead.next = current1;
    current1 = current1.next;
    nextList = current2;
  } else {
    currentHead.next = current2;
    current2 = current2.next;
    nextList = current1;
  }
  currentHead = currentHead.next;
}
if(current1 === null && current2 !== null) {
  currentHead.next = current2;
}
if(current2 === null && current !== null) {
  currentHead.next = current1;
}
return head;
};

const head1 = new Node(1);
const val3 = new Node(3);
const val5 = new Node(5);
const head2 = new Node(2);
const val4 = new Node(4);
const val6 = new Node(6);
const val7 = new Node(7);
const val8 = new Node(8);
const val10 = new Node(10);
head1.next = val3;
val3.next = val5;
val5.next = val10;
head2.next = val4;
val4.next = val6;
val6.next = val7;
val7.next = val8;


console.log(JSON.stringify(zip(head1,head2)));

module.exports = {Node: Node, zip: zip};
