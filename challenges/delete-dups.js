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
'use strict';
function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  let curr = head;
  while (curr) {
    let n = curr.next;
    if (n) {
      if (curr.value === n.value) {
        curr.next = n.next;
      }
      if (n.next) {
        if (curr.value === n.next.value) {
          n.next = n.next.next;
        }
      }
    }
    curr = curr.next;
  }
  return head;
}

module.exports = deleteDups;

let a = new Node(5);
a.next = new Node(7);
a.next.next = new Node(5);
a.next.next.next = new Node(7);
a.next.next.next.next = new Node(6);
a.next.next.next.next.next = new Node(5);
a.next.next.next.next.next.next = new Node(10);
a.next.next.next.next.next.next.next = new Node(6);

console.dir(deleteDups(a));

