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
    valueArr.push(head.value);
    let temp = null;
    if (valueArr.includes(head.next.value)) {
      temp = head.next;
      while (valueArr.includes(temp.value)) {
        temp = temp.next;
      }
      head.next = temp;
    }
    head = head.next;
  }
  return head;
}

module.exports = deleteDups;
