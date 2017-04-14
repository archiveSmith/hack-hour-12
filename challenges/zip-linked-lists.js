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

// Recursive Solution
function zip (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  l1.next = zip(l2, l1.next);
  return l1;
}

function zipAlternate(l1, l2) {
  const arr1 = [];
  const arr2 = [];
  let output;

  let currNode = l1;
  while (currNode) {
    arr1.push(currNode.value);
    currNode = currNode.next;
  }

  currNode = l2;
  while (currNode) {
    arr2.push(currNode.value);
    currNode = currNode.next;
  }

  const arrLength = arr1.length > arr2.length ? arr1.length : arr2.length;

  if (arr1[0]) {
    output = new Node(arr1[0]);
    if (arr2[0]) {
      output.next = new Node(arr2[0]);
      currNode = output.next;
    } else {
      currNode = output;
    }
  } else if (arr2[0]) {
    output = new Node(arr2[0]);
    currNode = output;
  } else {
    return new Node();
  }

  for (let i = 1; i < arrLength; i += 1) {
    if (arr1[i]) {
      currNode.next = new Node(arr1[i]);
      currNode = currNode.next;
    }
    if (arr2[i]) {
      currNode.next = new Node(arr2[i]);
      currNode = currNode.next;
    }
  }

  return output;
}

// const listA = new Node('a1');
// listA.next = new Node('a2');
// listA.next.next = new Node('a3');

// const listB = new Node('b1');
// listB.next = new Node('b2');
// listB.next.next = new Node('b3');

// const zipped = zip(listA, listB);

// console.log(zipped);

module.exports = {
  Node: Node,
  zip: zip
};
