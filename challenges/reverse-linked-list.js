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

const list = new Node('1');
list.next = new Node ('2');
list.next.next = new Node ('3');
list.next.next.next = new Node ('4');
list.next.next.next.next = new Node ('5');


function reverseLinkedList(head) {
    if (head === null || head.next === null) return;

    let node = head;

    // get to the end

    let prev;
    let next = node.next;

    while(next) {
      prev = node;
      node = next;

      next = node.next;
      node.next = prev;
    }

    head.next = null;

    head = node;

    return head;

}

let node = list;
node = reverseLinkedList(list);
while(node) {
    console.log(node.value);
    node = node.next;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
