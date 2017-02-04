/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  // Check for edge cases
  if (!head) return null;
  if (head.next === null) return head;

  // Create new variable to not reassign argument
  let newHead = head;
  let i;
  const nodeArr = [];
  // Add each successive node to the array
  while (newHead.next !== null) {
    nodeArr.unshift(newHead);
    newHead = newHead.next;
  }
  // Add the tail which will become the head
  nodeArr.unshift(newHead);
  // Reassign next values for all the nodes
  for (i = 0; i < nodeArr.length - 1; i += 1) {
    nodeArr[i].next = nodeArr[i + 1];
  }
  // Set the new tail next value
  nodeArr[nodeArr.length - 1].next = null;
  return nodeArr[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
