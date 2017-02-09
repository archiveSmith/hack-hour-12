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

/*
function objectTest (){
    let obj1 = {a: 1, b:2, c:{d: 4}};
    let obj2 = obj1;
    let obj3 = {e: 4};
    obj2 = obj3;
    console.log(obj1);
    console.log(obj2);
}
*/

/*function reverseLinkedList(head) {
    let currNode = head;
    let tempNode = null;
    let nextNode = null;
    while (currNode) {
        nextNode = currNode.next;
        currNode.next = tempNode ? tempNode : null; 
        tempNode = currNode;
        currNode = nextNode;
    }
    console.log('head ',head);
    return tempNode;
}*/

function reverseLinkedList (list) {
    /*  alright we have a linked list
    start with edge case
    start  by looping through each node and store
    then we'll loop through backwards that array
    and set each one's next to i+1 and the last one
    to null
    */
    if (!list || !list.next) return list;
    const holder = [];
    while (list.next) {
        holder.push(list);
        list = list.next;
    }
    for (let i = holder.length - 1; i > 0; i--) {
        holder[i].next = holder[i-1];
    }
    holder[0].next = null;
    return holder[holder.length-1];
}


console.log(reverseLinkedList(list));
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
