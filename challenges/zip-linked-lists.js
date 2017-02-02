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
  if (!l1 || !l2) return;
  if (l1 || !l2) return l1;
  if (!l1 || l2) return l2;

  const head = l1;
  let currNode = head;
  let currPick = l2;
  let nextPick = l2.next;
  while (l2.next) {
    if (currNode.next) {
      let tempNode = currNode.next;
      nextPick = currPick.next;
      currNode.next = currPick;
      currPick.next = tempNode;
      currNode = tempNode;
    } else {
      return head;
    }
  }
  return head;
};

module.exports = {Node: Node, zip: zip};
