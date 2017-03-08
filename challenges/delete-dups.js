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
  console.log(head);
  let valueArr = [];
  while (head.next !== null) {
    valueArr.push(head);
    let temp = null;
    if (valueArr.includes(head.next)) {
      temp = head.next;
      while (valueArr.includes(temp)) {
        temp = temp.next;
      }
      head.next = temp;
    }
  }
  return head;
}

module.exports = deleteDups;
