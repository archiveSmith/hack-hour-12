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
  if (!head) return null;

  function add(value) {
    let currNode = head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(value);
  }

  let temp = head;
  const arr = [temp.value];

  while (temp.next) {
    arr.push(temp.next.value);
    temp = temp.next;
  }

  arr.reverse();
  head = new Node(arr[0]);

  for (let i = 1; i < arr.length; i += 1) {
    add(arr[i]);
  }

  return head;
}

module.exports = { Node, reverseLinkedList };
