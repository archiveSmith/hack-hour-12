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
  // Strategy: get each number as actual numbers, add, create list based on sum

  // Use arrays to append characters backwards in constant time (string concat is linear time, as is array unshift)
  function convertToArray(list) {
    const reverseNumber = [];

    while (list !== null) {
      reverseNumber.push(list.value);
      list = list.next;
    }

    return reverseNumber;
  }

  function convertToNumber(array) {
    return Number(array.reverse().join(''));
  }

  function convertToList(array) {
    // Return head to grab whole list. Use tail to append in constant time.
    let sumListHead;
    let sumListTail;

    for (let i = 0; i < reversedSumArray.length; i++) {
      const digit = Number(reversedSumArray[i]);
      const node = new Node(digit);

      if (sumListHead === undefined) {
        sumListHead = sumListTail = node;
        continue;
      }

      sumListTail.next = node;
      sumListTail = sumListTail.next;
    }

    return sumListHead;
  }
  
  const l1Array = convertToArray(l1);
  const l2Array = convertToArray(l2);

  const l1Number = convertToNumber(l1Array);
  const l2Number = convertToNumber(l2Array);

  const sum = l1Number + l2Number;
  const reversedSumArray = sum.toString().split('').reverse();
  
  return convertToList(reversedSumArray);
}

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);

// a.next = b;
// b.next = c;
// console.log(addLinkedList(a, d)); // 325

module.exports = { Node: Node, addLinkedList: addLinkedList };
