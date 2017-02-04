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
    if (head === null) return;
    if (head.next === null) return head;
    let array = [];
    let reversed = null;
    while (head) {
        array.push(head.value);
        head = head.next;
    }
    for (let i = array.length - 1; i >= 0; i--) {
      let newNode = new Node(array[i]);
      if (reversed === null) {
          reversed = newNode;
      } else {
        current = reversed;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
      }
   }
   return reversed;
}

// {"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4,"next":null}}}

// let l1 = new Node(1);
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// l1.next.next.next = new Node(4);
// l1.next.next.next.next = new Node(5);
// console.log(JSON.stringify(l1));

// console.log(reverseLinkedList(l1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
