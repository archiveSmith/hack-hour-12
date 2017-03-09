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


function deleteDups(head) {
  const store = {};
  const clone = JSON.parse(JSON.stringify(head));
  clone.value = null;
  clone.next = null;
  let currentNode = head;
  while (currentNode) {
    if (!store[currentNode.value]) {
      store[currentNode.value] = true;
    }
    currentNode = currentNode.next;
  }

  let cloneCurrentNode = clone;
  let headClone = cloneCurrentNode;
  for (let prop in store) {
    while (cloneCurrentNode.next !== null) {
      cloneCurrentNode = cloneCurrentNode.next;
    }
    console.log(prop);
    cloneCurrentNode.value = prop;
  }
  console.log('headClone', JSON.stringify(headClone));
}

var Node = function(value) {
  this.value = value;
  this.next = null;
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
