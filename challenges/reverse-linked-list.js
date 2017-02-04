/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function reverseLinkedList(head) {
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

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
