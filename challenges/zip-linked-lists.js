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

 function zip(l1, l2) {
   if (!l1 && !l2) return;
   if (!l1) return l2;
   if (!l2) return l1;

   let val1 = l1.value;
   let val2 =  l2.value;
   let result = new Node(0);
   // let tail = result.next;
   result.next = l1;
   l1 = l1.next;
   result.next.next = l2;
   l2 = l2.next
   result.next.next.next = l1;
   l1 = l1.next
   result.next.next.next.next = l2;
   l2 = l2.next
   result.next.next.next.next.next = l1;
   l1 = l1.next;
   result.next.next.next.next.next.next = l2;

   // result.next = y;

   // console.log(result)

   // if (x.next && y.next) {
   //   result.next = l1;
   //   l1 = l1.next;
   //   result.next.next = l2;
   //   l2 = l2.next;
   // }

   return result.next;
 };

module.exports = {Node: Node, zip: zip};
