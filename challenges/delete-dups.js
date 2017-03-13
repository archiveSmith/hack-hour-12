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
  if (head.next === null) return head;
  for (let compare = head; compare !== null; compare = compare.next) {
    let currNode = compare;
    for (let nextNode = currNode.next; nextNode !== null; nextNode = nextNode.next) {
      nextNode.value === compare.value ? currNode.next = nextNode.next : currNode = nextNode;
    }
  }
  return head;
}

module.exports = deleteDups;
