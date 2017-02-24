/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function reverseLinkedListAlternate(head) {
    let currNode = head;
    let tempNode = null;
    let nextNode = null;

    while (currNode) {
        nextNode = currNode.next;
        currNode.next = tempNode ? tempNode : null; 
        tempNode = currNode;
        currNode = nextNode;
    }
    return tempNode;
}

// recursive
function reverseLinkedList(head, prev = null) {
    if (!head) return null;
    const forward = head.next;
    head.next = prev;
    if (forward) return reverseLinkedList(forward, head);
    return head; // Code only goes here on last node
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
