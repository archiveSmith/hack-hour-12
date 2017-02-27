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
  let sum;
  let next;
  let carry;
  while(l1 && l2) {
    let curr = l1.value + l2.value;
    if (carry) curr += carry;
    if (curr >= 10) {
      carry = 1;
      curr = curr - 10;
    } else {
      carry = null;
    }

    if (sum) {
      sum = new Node(curr);
      next = sum;
    } else {
      next = sum.next = new Node(curr);
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  let cont = l1 ? l1 : l2;

  while (cont) {
    let curr;
    if (carry) {
      curr = cont.value + carry;
    } else curr = cont.value;

    if (curr >= 10) {
      carry = 1;
      curr = curr - 10;
    } else {
      carry = null;
    }

    if (sum) {
      sum = new Node(curr);
      next = sum;
    } else {
      next = sum.next = new Node(curr);
    }

    cont = cont.next;
  }

  return sum;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
