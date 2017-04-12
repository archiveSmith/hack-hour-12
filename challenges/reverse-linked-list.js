/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

// now it happens in place

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  let nodeArr = [];
  let currNode = head;
  while (currNode !== null) {
    nodeArr.push(currNode);
    currNode = currNode.next;
  }
  nodeArr = nodeArr.reverse();
  for (let i = 0; i < (nodeArr.length - 2); i += 1) {
    nodeArr[i].next = nodeArr[i + 1];
  }
  nodeArr[nodeArr.length - 1].next = null;
  return nodeArr[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
