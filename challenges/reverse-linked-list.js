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
    // edge cases
        // head == null
    if (!head) return null;
        // there only one linked list in head
    if (!head.next) return head


    let arr = [];
    let currentNode = head;
    while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }

    let result = new Node(arr[arr.length - 1])
    let newNode = result;
    for (let i = arr.length - 2; i >= 0; i--) {
        newNode.next = new Node(arr[i]);
        newNode = newNode.next;
    }
    return result;
}

// let start = new Node(1);
// start.next = new Node(3);
// start.next.next = new Node(5)

// console.log(reverseLinkedList(start))
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
