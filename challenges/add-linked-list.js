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

// const test1 = new Node(2);
// test1.next = new Node(1);
// test1.next.next = new Node(5);
// const test2 = new Node(5);
// test2.next = new Node(9);
// test2.next.next = new Node(2);
// test2.next.next.next = new Node(4);

function addLinkedList(l1, l2) {
  const sums = [];
  let carry = 0;
  while (l1 && l2) {
    if (l1.value + l2.value + carry < 10) {
      sums.push(l1.value+l2.value+carry);
      carry = 0;
    }
    else {
      sums.push(l1.value + l2.value + carry - 10);
      carry = 1;
    }
    l1 = l1.next;
    l2 = l2.next;
  };
  while(l1) {
    sums.push(l1.value + carry);
    carry = 0;
    l1 = l1.next;
  };
  while(l2) {
    sums.push(l2.value + carry);
    carry = 0;
    l2 = l2.next;
  };
  if(!sums[0]) return;
  const allNodes = sums.map(item => {
    return new Node(item);
  });
  for (let i = 0; i < allNodes.length - 1; i++) {
    allNodes[i].next = allNodes[i+1];
  }
  return allNodes[0];
}
// console.log(JSON.stringify(addLinkedList(test1, test2)));
module.exports = {Node: Node, addLinkedList: addLinkedList};
