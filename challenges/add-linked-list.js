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
  if (!l1) return l2;
  if (!l2) return l1;

  let currA = l1;
  let currB = l2;
  let output;
  let prev;
  let currOutput;
  let currDigit;
  let carryOver = 0;
  let carryOverStr = '';

  while (currA && currB) {
    // console.log(currA.value, currB.value);
    currDigit = currA.value + currB.value + carryOver;
    if (currDigit > 9 || currDigit < -9) {
      carryOverStr = currDigit.toString();
      currDigit = parseInt(carryOverStr.slice(1, 2));
      carryOver = parseInt(carryOverStr.slice(0, 1));
    }
    currOutput = new Node(currDigit);
    if (!output) output = currOutput;
    if (prev) prev.next = currOutput;
    // console.log(currOutput);
    prev = currOutput;
    currA = currA.next;
    currB = currB.next;
  }

  if (currA) { 
    currOutput = new Node(currA.value + carryOver);
    prev.next = currOuput;
  } else if (currB) { 
    currOutput = new Node(currB.value + carryOver);
    prev.next = currOutput;
  } else if (!currA && !currB && carryOver !== 0) {
    currOutput = new Node(carryOver);
    prev.next = currOutput;
  }

  return output;
}

// a1 = new Node(1);
// a2 = new Node(2);
// a3 = new Node(3);
// a4 = new Node(4);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;

// b1 = new Node(5);
// b2 = new Node(6);
// b3 = new Node(7);
// b4 = new Node(8);
// b1.next = b2;
// b2.next = b3;
// b3.next = b4;

// console.log(JSON.stringify(addLinkedList(a1, b1)));

module.exports = {Node: Node, addLinkedList: addLinkedList};
