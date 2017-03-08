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
  let currNode = head;
  let prevNode = head;

  while (currNode) {
    if (!checkDup(currNode.value, head)) {
      prevNode = currNode;
      currNode = currNode.next;
    } else {
      prevNode.next = currNode.next;
      let temp = currNode;
      currNode = currNode.next;
      delete temp;
    }
  }
  return head;
}

function checkDup(val, head) {
  let count = 0;
  let currNode = head;

  while (currNode) {
    if (currNode.value === val) count += 1;
    if (count > 1) return true;
    currNode = currNode.next;
  }
  return false;
}

module.exports = deleteDups;
