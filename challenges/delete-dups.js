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

const Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  if (!head) return;
  if (head.next === null) return head;

  for (let compare = head; compare !== null; compare = compare.next) {
    let currNode = compare;
    for (let nextNode = currNode.next; nextNode !== null; nextNode = nextNode.next) {
      nextNode.value === compare.value ? currNode.next = nextNode.next : currNode = nextNode;
    }
  }
  return head;
}


var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
var node6 = node5.next = new Node('3');
// console.log(node1);

console.log(JSON.stringify(deleteDups(node1)));



module.exports = deleteDups;
