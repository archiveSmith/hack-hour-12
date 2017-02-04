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
    if (!head || !head.next) return head;

    const nodeStack = [head];
    let curr = head.next;
    while (curr) {
        nodeStack.push(curr);
        curr = curr.next;
    }
    head = nodeStack.pop();
    head.next = null;
    curr = head;
    while (nodeStack.length > 0) {
        curr.next = nodeStack.pop();
        curr = curr.next;
    }

    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
