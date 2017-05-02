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
  let unique = [];
  let current = head;
  let final;
  while(current !== null) {
    let val = unique.map((e) => {
      return e.value;
    });
    if(val.indexOf(current.value) === -1) {
      unique.push(current);
    }
    current = current.next;
  }
  final = unique[0];
  for(let i = 1; i < unique.length - 1; i++) {
    if(i === unique.length - 2) unique[i+1].next = null;
    unique[i].next = unique[i+1];
  }
  return final;
}

// console.log(JSON.stringify(deleteDups(a)));

module.exports = deleteDups;
