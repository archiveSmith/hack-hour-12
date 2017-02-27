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

function carryOverHelper(n1, n2) {
  if (!n1.value) n1.value = 0;
  if (!n2.value) n2.value = 0;
  const valArr = (n1.value + n2.value).split('');
  const val = valArr[1] ? valArr[1] : valArr[0];
  const carryOver = valArr[1] ? valArr[0] : 0;
  return [carryOver, val];
}

function addLinkedList(l1, l2) {
  let output;
  let currOutputNode = output;
  let currL1Node = l1;
  let currL2Node = l2;
  let tempCarryOver = 0;

  while (currL1Node || currL2Node) {
    currOutputNode = new Node();
    const carryOvers = carryOverHelper(currL1Node, currL2Node);
    currOutputNode.value = carryOvers[1] + tempCarryOver;
    tempCarryOver = carryOvers[0];
    currOutputNode = currOutputNode.next;
    currL1Node = currL1Node.next;
    currL2Node = currL2Node.next;
  }

  return output;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
