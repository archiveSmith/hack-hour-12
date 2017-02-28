/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
//   let arr = [];

//   while (l1 || l2) {
//     if (!l1) {
//       arr.push(l1.value);
//       l2 = l2.next;
//     }

//     if (!l2) {
//       arr.push(l2.value);
//       l1 = l1.next;
//     }

//     arr.push(l1.value + l2.value)
//     l1 = l1.next;
//     l2 = l2.next;
//   }

//   let result = new Node(arr[0])
//   let temp = result
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//       arr[i] -= 10;
//       if (!arr[i + 1]) {
//         arr[i + 1] = 1;
//       } else {
//         arr[i + 1]++;
//       }
//     }
//     temp.next = new Node(arr[i]);
//     temp = temp.next;
//   }

//   return result;
}

// TESTING 

module.exports = {Node: Node, addLinkedList: addLinkedList};
