/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
    if(head === undefined || k <= 0) return;
    let current = head;
    // Initialize at 1 to include the head
    let linkSize = 1;
    let count;
    while(current.next !== null) {
        current = current.next;
        linkSize++;
    }
    count = linkSize - k;
    if(count < 0) {
        return undefined;
    }
    current = head;
    while(count > 0) {
        current = current.next;
        count--;
    }
    return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
