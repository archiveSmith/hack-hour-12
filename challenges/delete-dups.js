/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
	this.value = value;
	this.next = null;
}


function deleteDups(head) {
	let current_node = head;
	let arr = []
	arr.push(head.value);

	if (!current_node.next) return head;

	while (current_node.next) {
		if (arr.indexOf(current_node.next.value) > -1 && current_node.next.next) {
			current_node.next = current_node.next.next;

		} else if (arr.indexOf(current_node.next.value) > -1 && !current_node.next.next) {
			current_node.next = null;

		} else {
			arr.push(current_node.next.value);

			current_node = current_node.next
		}
	}
	return head
}

// ========= TESTING =============
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(2);
let result = (deleteDups(head));
console.log(result)

module.exports = deleteDups;
