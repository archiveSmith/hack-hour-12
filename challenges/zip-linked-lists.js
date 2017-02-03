/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function zip(l1, l2) {
//   if (l1 === undefined && l2 === undefined) return;
//   if (l1 === undefined) return l2;
//   if (l2 === undefined) return l1;
//   // let l1Len = 0;
//   // let start = l1;
//   // while (start) {
//   //   l1Len += 1;
//   //   start = start.next;
//   // }
  
//   // let count = 0;
//   // let zip = l1;
//   // let temp = l2;
//   // while (count < l1Len) {
//   //   [zip.next, temp.next] = [temp, zip.next];
//   // }
//   // let curr = l1;
//   // let temp = l2;
//   // while (true) {
//   //   [curr.next, l2.next] = [l2, ]
//   //   temp = temp.next;
//   // }
//   let zip = l1;
//   let right = l1;
//   let left = l2;

//   while (right.next !== null && left.next !== null) {
//     zip
//   }
// };

function zip(l1, l2) {
  
}

// let l1 = new Node(3);
// l1.next = new Node(2);
// l1.next.next = new Node(6);

// console.log(zip(l1))

module.exports = {Node: Node, zip: zip};
