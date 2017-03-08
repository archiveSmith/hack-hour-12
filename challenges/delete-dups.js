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

// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

function deleteDups(head) {
  const list = {};
  let curr = head;
  let prev;

  while (curr) {
    if (list[curr.value]) {
      prev.next = curr.next;
    } else {
      list[curr.value] = 1;
      prev = curr;
    }

    curr = curr.next;
  }

  return head;
}
// 1 -> 2 -> 3 -> 3 -> 3 -> 4 -> 5 -> null
// const node = new Node(1);
// node.next = new Node(2);
// node.next.next = new Node(3);
// node.next.next.next = new Node(3);
// node.next.next.next.next = new Node(3);
// node.next.next.next.next.next = new Node(4);
// node.next.next.next.next.next.next = new Node(5);
// console.log(JSON.stringify(node));
// console.log(JSON.stringify(deleteDups(node)));

module.exports = deleteDups;
