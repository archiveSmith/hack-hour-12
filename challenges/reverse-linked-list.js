/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  if (head) return;
  let links = []
  while (head) {
    links.unshift(head)
    head = head.next
  }

  links[links.length - 1].next = null;

  for (let i = 0; i < links.length - 1; i += 1) {
    links[i].next = links[i + 1]
  }

  return links[0]
}

// let linkedList = { 
//     value: 6, next: {
//         value: 5, 
//         next: {
//           value: 7,
//           next: {
//             value: 2,
//             next: null
//           }
//         }
//     }
// }

// console.log(reverseLinkedList(linkedList))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
