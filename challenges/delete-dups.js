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

 const Node = (value) => {
   this.value = value;
   this.next = null;
 };

 function deleteDups(head) {
   const compArr = [];
   let newHead = {};
   let currNode = head;

   while (currNode) {
     compArr.push(currNode.value);
     currNode = currNode.next;
   }

   const noDupsArr = Array.from([...new Set(compArr)]);
   newHead = new Node(noDupsArr[0]);
   currNode = newHead;

   for (let i = 1; i < noDupsArr.length; i += 1) {
     currNode.next = new Node(noDupsArr[i]);
     currNode = currNode.next;
   }

   return newHead;
 }

 module.exports = deleteDups;
