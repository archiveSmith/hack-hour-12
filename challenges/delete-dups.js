/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

 let Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  const compArr = [];
  let newHead = {};
  let currNode = head;
  while (currNode) {
    compArr.push(currNode.value);
    currNode = currNode.next;
  }
  // console.log(compArr)
  // console.log(currNode)
  // currNode = head;
  // console.log(currNode)
  // while (currNode && currNode.next) {
  //   if (compArr.includes(currNode.next.value)) {
  //     currNode.next = currNode.next.next;
  //   }
  //   currNode = currNode.next;
  // }
  let noDupsArr = Array.from([...new Set(compArr)])
  console.log(noDupsArr)
  newHead = new Node(noDupsArr[0]);
  currNode = newHead;
  for (let i = 1; i < noDupsArr.length; i += 1) {
    currNode.next = new Node(noDupsArr[i]);
    currNode = currNode.next;
  }
  return newHead;
}

 module.exports = deleteDups;
