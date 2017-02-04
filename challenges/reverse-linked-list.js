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
  if (!head) return head;

  const nodes = [];
  let currNode = head;

  while (currNode) {
    nodes.push(currNode);
    currNode = currNode.next;
  }

  for (let i = nodes.length - 1; i > 0; i--) {
    nodes[i].next = nodes[i - 1];
  }

  nodes[0].next = null;
  return nodes[nodes.length - 1];
}

console.log(JSON.stringify(reverseLinkedList(null)));
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
