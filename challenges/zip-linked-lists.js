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
  if (!l1) return l2;
  if (!l2) return l1;

  const head = l1;  // set head of new list
  let tempNode = head; // set temporary node to head

  l1 = l1.next; // advance l1 to next node in its list

  while (l2 && l1) { // while both lists have nodes
    tempNode.next = l2; // link tempNode to l2 node
    l2 = l2.next; // advance l2 to next node in its list
    tempNode = tempNode.next; // advance tempNode to previous l2 node
    tempNode.next = l1; // link temp node to l1 node
    l1 = l1.next; // advance l1 to next node in its list
    tempNode = tempNode.next; // advance tempNode to previous l1 node
  }

  // when either list has ended, link tempNode to the other list
  tempNode.next = l2 ? l2 : l1;

  return head; // return head

}
  /**
   *  recursive:
   *  function zip(l1, l2) {
   *    if (!l1) return l2;
   *    if (!l2) return l1;
   * 
   *    l1. = zip(l2, l1.next);
   * 
   *    return l1;  
   * }
   */


module.exports = {Node: Node, zip: zip};
