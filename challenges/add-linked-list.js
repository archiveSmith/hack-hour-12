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
  if (typeof l1 !== 'object' || typeof l2 !== 'object') return;

  let n1 = '';
  let n2 = '';

  let curr1 = l1;
  let curr2 = l2;

  while (curr1) {
    n1 = curr1.value + n1;
    curr1 = curr1.next;
  }

  while (curr2) {
    n2 = curr2.value + n2;
    curr2 = curr2.next;
  }

  const sum = Number(n1) + Number(n2);
  let nums = sum.toString().split('');

  const result = new Node(nums.pop());
  let pointer = result;

  while (nums.length) {
    pointer.next = new Node(nums.pop());
    pointer = pointer.next;
  }

  return result;

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
