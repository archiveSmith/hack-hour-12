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

function addLinkedList(l1, l2) {
let addedList = new Node();
let currNode = addedList;
let carry = 0;
  while (l1 && l2) {
    if (l1.value + l2.value + carry > 9) {
      currNode.value = l1.value + l2.value - 10 + carry;
      carry = 1;
    } else {
      currNode.value = l1.value + l2.value + carry;
      carry = 0;
    }
    currNode.next = new Node();
    currNode = currNode.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (carry) currNode.value = 1;
  else currNode = null; 
  return addedList;
}
// let first = new Node(2);
// first.next = new Node(1);
// first.next.next = new Node(5);
// let second = new Node(5);
// second.next = new Node(9);
// second.next.next = new Node(2);
// console.log(first, second);

// console.log(addLinkedList(first, second));

module.exports = {Node: Node, addLinkedList: addLinkedList};
