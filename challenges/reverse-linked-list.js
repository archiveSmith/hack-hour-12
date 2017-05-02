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
    if (!head) return false;
    if (!head.next) return head;

    let reverseHead = head.next;
    let next = reverseHead.next;
    head.next = null;
    reverseHead.next = head;

    while(next) {
        head = reverseHead;
        reverseHead = next;
        next = next.next;
        reverseHead.next = head;
    }
    return reverseHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
