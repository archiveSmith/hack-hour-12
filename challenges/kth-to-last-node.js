/**
 Write a function that takes an integer and the head of a singly linked list,
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
'use strict';
function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	let length = 0;
	let currentNode = head;
	//find length of nodes
	if (!head) return undefined;
	while (currentNode.next) {
		length++;
		currentNode = currentNode.next;
	}
	if (k > length + 1) return undefined;
	const index = length - k + 1;
	let location = 0;
	if(location===index) return head;

	let nodeCount = head; 
	while((location + 1) !== index) {
		location++;
		nodeCount = nodeCount.next;
	}
	return nodeCount.next;
}

//test
var a = new Node('A');
 var b = new Node('B');
 var c = new Node('C');
 var d = new Node('D');
 var e = new Node('E');
 var f = new Node('F');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 e.next = f;

console.log(kthToLastNode(7,a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
