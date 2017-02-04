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
  let temp = head;
  let arr = [];

  while (temp.next) {
    arr.push(temp.value);
    temp = temp.next;
  }

  arr.reverse();

  const newHead = new Node(arr[0])
  let newTail = newHead;

  function push1(value) {
    newTail.next = value;
    newTail = newTail.next;
  }

  for (let i = 1; i < arr.length; i += 1) {
    push1(new Node(arr[i]))
  }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
