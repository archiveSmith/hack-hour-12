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
<<<<<<< HEAD
    let copy = JSON.parse(JSON.stringify(head));
    const tempArr = [];

    while(copy !== null) {
        tempArr.push(copy);
        copy = copy.next;
    }

    for(let i = tempArr.length - 1; i >= 0; i--) {
        tempArr[i].next = tempArr[i - 1];
        if(i === 0) {
            tempArr[i].next = null;
        }
    }

    return tempArr[tempArr.length - 1];
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// console.log(JSON.stringify(reverseLinkedList(node1)));

=======

}

>>>>>>> f9b02b681d27526249e4fa3c6903d717ac416dfa
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
