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
  if (!head) return undefined;
  if (head.next === null) return head;

  let newHead = head;
  let i;
  const nodeArr = [];
  while (newHead.next !== null) {
    nodeArr.unshift(newHead);
    newHead = newHead.next;
  }
  nodeArr.unshift(newHead);
  for (i = 0; i < nodeArr.length - 1; i += 1) {
    nodeArr[i].next = nodeArr[i + 1];
  }
  nodeArr[nodeArr.length - 1].next = null;
  return nodeArr[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
