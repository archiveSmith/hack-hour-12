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
  if (!l1 || !l2) return l1 ? l1 : l2;
  let sumList;
  let nextNode;
  function addNode(n1, n2, carry = null) {
    if (n1 && n2) {
      const curr = n1.value + n2.value;
      let carr = null;
      if (carry) curr += carry;
      if (curr >= 10) {
        curr = curr - 10;
        carr = 1;
      }
      if (!sumList) {
        nextNode = sumList = new Node(curr);
        addNode(n1.next, n2.next, carr);
      } else {
        nextNode = nextNode.next = new Node(curr);
        addNode(n1.next, n2.next, carr);
      }
    }
  }

  addNode(l1, l2);
  return sumList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
