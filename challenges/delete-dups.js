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

function deleteDups(head) {
  // if no head, return undefined
  if (!head) return;
  // if no head.next, return head
  if (!head.next) return head;
  // traverse LL starting at head 
  for (let compare = head; compare !== null; compare = compare.next) {
    // begin at outer postion by assigning currNode to compare
    let currNode = compare;
    // travers the rest of the nodes by starting at currNode.next
    for (let nextNode = currNode.next; nextNode !== null; nextNode = nextNode.next) {
      // if next nodes value equals the comparison value, point currNode.next to nextNode.next
      nextNode.value === compare.value ? currNode.next = nextNode.next : currNode = nextNode;
    }
  }
  // return head since LL was modified in place
  return head;
}

// const linkedList = { value: 1, next: {
//   value: 2,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// }}

// console.log(deleteDups(linkedList));
// console.log(linkedList)

module.exports = deleteDups;
