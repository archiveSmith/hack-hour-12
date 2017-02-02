/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	arr1 = [];
	arr2 = [];

	currNode = l1;
	while (currNode) {
		arr1.push(currNode.value);
		currNode = currNode.next;
	}

	currNode = l2;
	while (currNode) {
		arr2.push(currNode.value);
		currNode = currNode.next;
	}
	
	arrLength = arr1.length > arr2.length ? arr1.length : arr2.length;

	if (arr1[0]) {
		var output = new Node(arr1[0]);
		if (arr2[0]) {
			output.next = new Node(arr2[0]);
			currNode = output.next;
		} else {
			currNode = output;
		}
	} else if (arr2[0]) {
		var output = new Node(arr2[0]);
		currNode = output;
	} else {
		return new Node();
	}

	for (var i = 1; i < arrLength; i++) {
		if (arr1[i]) {
			currNode.next = new Node(arr1[i]);
			currNode = currNode.next;
		}
		if (arr2[i]) {
			currNode.next = new Node(arr2[i]);
			currNode = currNode.next;
		}
	}

	return output;
};

var listA = new Node('a1');
listA.next = new Node('a2');
listA.next.next = new Node('a3');

var listB = new Node('b1');
listB.next = new Node('b2');
listB.next.next = new Node('b3');

var zipped = zip(listA, listB);

// console.log(zipped);

module.exports = {Node: Node, zip: zip};
