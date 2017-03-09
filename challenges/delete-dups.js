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



function deleteDups(head, prev = null, values = {}) {
  if (!head) return 'finished';
  if (values[head.value] === true) {
    prev.next = head.next;
    return deleteDups(head.next, prev, values)
  } else {
    values[head.value] = true;
    prev = head;
    return deleteDups(head.next, prev, values);
  }
}

const linkedList = { value: 1, next: {
  value: 2,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}}

console.log(deleteDups(linkedList));
console.log(linkedList)

module.exports = deleteDups;
