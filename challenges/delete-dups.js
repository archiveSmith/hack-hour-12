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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  if (!head) return;
  if (!head.next) return head;
  
  let currNode = head;
  let prevNode = null;
  
  // // buffer
  // const cache = {};
  
  // while (currNode.next) {
  //   if (cache[currNode.next.value]) {
  //     if (prevNode) prevNode.next = currNode.next;
  //   } else {
  //     cache[currNode.next.value] = true;
  //   }
  //   prevNode = currNode;
  //   currNode = currNode.next;
  // }
  // if (cache[currNode.value]) prevNode.next = null;
  
  // // no buffer (not working!!!)
  // let currCompareNode = currNode.next;
  // let prevCompareNode = currNode;
  // while (currNode.next) {
  //   while (currCompareNode.next) {
  //     if (currCompareNode.value === currNode.value) {
  //       console.log('YO');
  //       prevCompareNode.next = currCompareNode.next; 
  //     } else {
  //       prevCompareNode = currCompareNode;
  //     }
  //     currCompareNode = currCompareNode.next;
  //   }
  //   currNode = currNode.next;
  //   currCompareNode = currNode.next;
  // }
  
  return head;
}

// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('3');
// var node4 = node3.next = new Node('3');
// var node5 = node4.next = new Node('2');

// console.log(JSON.stringify(deleteDups(node1)));

module.exports = deleteDups;
