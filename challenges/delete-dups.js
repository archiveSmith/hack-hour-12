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

function Node(value) {
  this.value = value;
  this.next = null;
}

// function deleteDups(head) {
//   let unique = [];
//   let current = head;
//   let final;
//   while(current !== null) {
//     if(unique.map((e) => {
//       return e.value;
//     }).indexOf(current.value) === -1) {
//       unique.push(current);
//     }
//     current = current.next;
//   }
//   final = unique[0];
//   for(let i = 1; i < unique.length - 1; i++) {
//     if(i === unique.length - 2) unique[i+1].next = null;
//     unique[i].next = unique[i+1];
//   }
//   return final;
// }

// for loops
function deleteDups(head) {
  if(!head) return;
  if(head.next === null) return head;
  for(let compare = head; compare !== null; compare = compare.next) {
    let currNode = compare;
    for(let nextNode = currentNode.next; nextNode !== null; nextNode = nextNode.next) {
      nextNode.value === compare.value ? currNode.next = nextNode.next : currNode = nextNode;
    }
  }
  return head;
}

// const a = new Node(1);
// const b = new Node(2);
// const u = new Node(1);
// const c = new Node(3);
// const x = new Node(3);
// const d = new Node(4);

// a.next = b;
// b.next = u;
// u.next = c;
// c.next = x;
// x.next = d;

// console.log(JSON.stringify(deleteDups(a)));

module.exports = deleteDups;
