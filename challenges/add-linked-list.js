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

 function addLinkedList(l1, l2) {
   function Node(val) {
     this.value = val;
     this.next = null;
   }

   function arrToNum(arr) {
     return +arr.join('');
   }

   const l1Arr = [];
   const l2Arr = [];

   while (l1) {
     l1Arr.push(l1.value);
     l1 = l1.next;
   }

   while (l2) {
     l2Arr.push(l2.value);
     l2 = l2.next;
   }

  //  console.log(arrToNum(l1Arr) + arrToNum(l2Arr));
   const resultArr = String(arrToNum(l1Arr) + arrToNum(l2Arr)).split('').map(e => +e).reverse();
   let result = new Node(resultArr[0]);
   let currNode = result;
   for (let i = 1; i < resultArr.length; i += 1) {
     currNode.next = new Node(resultArr[i]);
     currNode = currNode.next;
   }
   console.log(JSON.stringify(result));
   return result;
 }

 addLinkedList({ value: 2, next: { value: 1, next: { value: 5, next: null } } }, { value: 5, next: { value: 9, next: { value: 2, next: null } } })

// function addLinkedList(l1, l2) {
//   function linkedListToNumber(linkedList) {
//     const tempArr = [];
//     let currNode = linkedList;
//
//     while (currNode) {
//       tempArr.unshift(currNode.value);
//       currNode = currNode.next;
//     }
//
//     return Number(tempArr.reduce((acc, cur) => acc + cur, ''));
//   }
//
//   function Node(val) {
//     this.value = val;
//     this.next = null;
//   }
//
//   function numberToLinkedList(number) {
//     const numberArr = String(number).split('');
//     const len = numberArr.length;
//     const result = new Node(numberArr[len - 1]);
//     let currNode = result;
//     let i;
//
//     for (i = len - 2; i >= 0; i -= 1) {
//       currNode.next = new Node(numberArr[i]);
//       currNode = currNode.next;
//     }
//
//     return result;
//   }
//
//   return numberToLinkedList(linkedListToNumber(l1) + linkedListToNumber(l2));
// }

module.exports = { addLinkedList };

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
//
// function addLinkedList(l1, l2) {
//   const arr1 = [];
//   const arr2 = [];
//
//   while (l1) {
//     arr1.unshift(l1.value);
//     l1 = l1.next;
//   }
//
//   while (l2) {
//     arr2.unshift(l2.value);
//     l2 = l2.next;
//   }
//
//   const resultArr = String(+arr1.join('') + +arr2.join('')).split('').reverse();
//
//   const result = new Node(resultArr[0]);
//   let currNode = result;
//
//   for (let i = 1; i < resultArr.length; i += 1) {
//     const newNode = new Node(resultArr[i]);
//     currNode.next = newNode;
//     currNode = currNode.next;
//   }
//
//   return result;
// }
