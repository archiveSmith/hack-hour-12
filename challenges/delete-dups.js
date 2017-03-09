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

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  // if (!head) return false;
  // const found = [];
  // let currNode = head;

  // found.push(currNode.value);

  // while (currNode.next) { console.log(found);
  //   if (found.indexOf(currNode.next.value) >= 0) {
  //     currNode.next = currNode.next.next;
  //     continue;
  //   } 
  //   found.push(currNode.next.value);
  //   currNode = currNode.next;
  // }
  // return head;

  function recurse(currNode, laterNode, nodeBeforeLaterNode) {
    if (!laterNode) return;
    if (currNode.value === laterNode.value) {
      nodeBeforeLaterNode.next = nodeBeforeLaterNode.next.next; 
    }
    recurse(currNode, laterNode.next, nodeBeforeLaterNode.next);
    recurse(currNode.next, laterNode.next, nodeBeforeLaterNode.next);
  }
  recurse(head, head.next, head);
  return head;
}

let head = new Node(1);
node1 = head.next = new Node(2);
node2 = node1.next = new Node(3);
node3 = node2.next = new Node(3);
console.log(JSON.stringify(head));
console.log(JSON.stringify(deleteDups(head)));

module.exports = deleteDups;
