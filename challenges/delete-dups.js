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

function Node (value) {
  this.value = value;
  this.next = null;
}

const n1 = new Node('1');
n1.next = new Node('2');
n1.next.next = new Node('3');
n1.next.next.next = new Node('4');
n1.next.next.next.next = new Node('3');
n1.next.next.next.next.next  = new Node('4');
n1.next.next.next.next.next.next  = new Node('5');
n1.next.next.next.next.next.next.next = new Node('6');

function deleteDups(node) {
  const values = [node.value];

  while (node.next) {
    while(values.includes(node.next.value)) {
      const deleteMe = node.next;
      node.next = node.next.next;
      delete deleteMe;
    }

    values.push(node.next.value);

    node = node.next;
  }
}

function walk (node) {
  while(node) {
    console.log('Val', node.value);
    node = node.next;
  }
  console.log('======')
}

//walk(n1);
//deleteDups(n1);
//walk(n1);

module.exports = deleteDups;
