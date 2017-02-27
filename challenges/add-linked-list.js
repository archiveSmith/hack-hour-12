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
  let firstNum = [];
  let secondNum = [];
  let addedArr;
  let shortest;
  let nodes = [];
  let i = 0;
  let j;
  let n;
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return null;

  do {
    firstNum.push(l1.value);
    l1 = l1.next;
  } while (l1.next !== null);
  firstNum.push(l1.value);

  do {
    secondNum.push(l2.value);
    l2 = l2.next;
  } while (l2.next !== null);
  secondNum.push(l2.value);

  let firstFullNum = parseInt(firstNum.reverse().join(''));
  let secondFullNum = parseInt(secondNum.reverse().join(''));

  let addedArr = (firstFullNum + secondFullNum).split('').reverse();

  for (j = 0; j < addedArr.length; j += 1) {
    nodes.push(new Node(addedArr[j]));
  }

  for (n = 0; n < nodes.length - 1; n += 1) {
    nodes[n].next = nodes[n + 1];
  }

  return nodes[0];
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

  // if (firstNum.length >= secondNum.length) {
  //   while(secondNum[i]) {
  //     addedArr.push(firstNum[i] + secondNum[i]);
  //     i += 1;
  //   }
  //   while(firstNum[i]) {
  //     addedArr.push(firstNum[i]);
  //     i += 1;
  //   }
  // }
  // else {
  //   while(firstNum[i]) {
  //     addedArr.push(firstNum[i] + secondNum[i]);
  //     i += 1;
  //   }
  //   while(secondNum[i]) {
  //     addedArr.push(firstNum[i]);
  //     i += 1;
  //   }
  // }
