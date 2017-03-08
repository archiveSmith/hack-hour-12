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
  if (!head) return;
  if (!head.next) return head;
  const cache = {};
  let currNode = head;
  let prevNode = null;
  while (currNode.next) {
    if (cache[currNode.next.value]) {
      if (prevNode) prevNode.next = currNode.next;
    } else {
      cache[currNode.next.value] = true;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
  return head;
}

module.exports = deleteDups;
