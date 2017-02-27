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
function linkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function Add(val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
}

function addLinkedList(l1, l2) {
  console.log(l1, l2);
  const arr1 = [];
  const arr2 = [];

  while (l1.next) {
    arr1.unshift(l1.value);
    l1 = l1.next;
  }

  while (l2.next) {
    arr2.unshift(l2.value);
    l2 = l2.next;
  }

  const resultArr = (arr1.join('') + arr2.join('')).split('');

  const newNode = new Node(resultArr[0]);

  for (let i = 1; i < resultArr.length; i += 1) {
    newNode.add(resultArr[i]);
  }

  return newNode;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
