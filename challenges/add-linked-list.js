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
  let carry = 0;
  let current1 = l1.next;
  let current2 = l2.next;
  let tempvalue;
  const answerlist = new Node((l1.value + l2.value) % 10);
  carry = (l1.value + l2.value) / 10 < 1 ? 0 : 1;

  while (current1 || current2 || carry === 1) {
    let currentanswer = answerlist;
    while (currentanswer.next) {
      currentanswer = currentanswer.next;
    }
    if (!current1 && !current2) {
      currentanswer.next = new Node(carry);
      carry = 0;
    } else if (!current2) {
      tempvalue = current1.value + carry;
      currentanswer.next = new Node(tempvalue % 10);
      carry = tempvalue / 10 < 1 ? 0 : 1;
      current1 = current1.next;
    } else if (!current1) {
      tempvalue = current2.value + carry;
      currentanswer.next = new Node(tempvalue % 10);
      carry = tempvalue / 10 < 1 ? 0 : 1;
      current2 = current2.next;
    } else {
      tempvalue = current1.value + current2.value + carry;
      currentanswer.next = new Node(tempvalue % 10);
      carry = tempvalue / 10 < 1 ? 0 : 1;
      current1 = current1.next;
      current2 = current2.next;
    }
  }
  return answerlist;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
