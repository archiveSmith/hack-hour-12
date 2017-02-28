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
  const arr1 = [];
  const arr2 = [];
  let addLinkedList;
  let pointer;
  while(l1 !== null) {
    arr1.push(l1.value);
    l1 = l1.next;
  }
  while(l2 !== null) {
    arr2.push(l2.value);
    l2 = l2.next;
  }
  let carried = 0;
  let temp;
  let maxLength = (arr1.length > arr2.length) ? arr1.length : arr2.length
  for(let i = 0; i < maxLength; i++) {
    if(arr1[i] === undefined) {
      arr1[i] = 0;
    }
    if(arr2[i] === undefined) {
      arr2[i] = 0;
    }
    temp = arr1[i] + arr2[i] + carried;
    if(temp > 9) {
      temp = temp.toString().split('');
      carried = parseInt(temp.slice(0, temp.length - 1));
      temp = parseInt(temp.slice(-1));
    }
    if(addLinkedList === undefined) {
      addLinkedList = new Node(temp);
      pointer = addLinkedList;
    } else {
      pointer.next = new Node(temp);
      pointer = pointer.next;
    }
  }
  return addLinkedList;
}

const a1 = new Node(5);
const a2 = new Node(2);
const a3 = new Node(3);
a1.next = a2;
a2.next = a3;

const b1 = new Node(5);
const b2 = new Node(8);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;

console.log(addLinkedList(a1, b1));

module.exports = {Node: Node, addLinkedList: addLinkedList};
