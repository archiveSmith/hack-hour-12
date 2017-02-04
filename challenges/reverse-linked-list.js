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
    if (!head) return undefined;
    if (!head.next) return head;

    const nodeStack = [head];
    let curr = head.next;
    while (curr) {
        nodeStack.push(curr);
        console.log('stack from push: ', nodeStack);
        curr = curr.next;
    }
    head = nodeStack.pop();
    head.next = null;
    curr = head;
    while (nodeStack.length > 0) {
        curr.next = nodeStack.pop();
        console.log('list from pop: ', head);
        curr = curr.next;
    }

    return head;
}

// let a = new Node(1);
// let b = new Node(2);
// let c = new Node(3);
// let d = new Node(4);
// let e = new Node(5);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log('result: ', reverseLinkedList(a));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
