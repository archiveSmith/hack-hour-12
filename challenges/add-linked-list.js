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
  let head = l2;
  while (l1 !== null) {
    l2.value += l1.value;
    if (l2.value >= 10) {
      let val = l2.value;
      let carry = 0;
      while (val >= 10) {
        carry += 1;
        val -= 10;
      }
      l2.value = val;
      if (l2.next) l2.next.value += carry;
      else {
        l2.next = new Node(0);
        l2.next.value += carry;
      }
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

// let head = new Node(2);
// head.next = new Node(1);
// head.next.next = new Node (5);
// let head2 = new Node(5);
// head2.next = new Node(9);
// head2.next.next = new Node(2);

// console.log(addLinkedList(head, head2));