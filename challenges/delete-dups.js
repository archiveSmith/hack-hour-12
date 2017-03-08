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



function deleteDups(head) {
  console.log(head);
  let valueArr = [];
  // check that we are not at end of LL
  while (head.next !== null) {
    valueArr.push(head.value);
    let temp = null;
    // Reassign next pointer as long as next.value is a duplicate
    if (valueArr.includes(head.next.value)) {
      temp = head.next;
      while (valueArr.includes(temp.value)) {
        temp = temp.next;
      }
      head.next = temp;
    }
    head = head.next;
  }
  return head;
}

function Node (value) {
  this.value = value;
  this.next = null;
}

const n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(3);
n1.next.next.next = new Node(3);
n1.next.next.next.next = new Node(3);
n1.next.next.next.next.next = new Node(5);
n1.next.next.next.next.next.next = new Node(4);
n1.next.next.next.next.next.next.next = new Node(2);



module.exports = deleteDups;
