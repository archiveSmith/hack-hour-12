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
<<<<<<< HEAD
  if (!l1) return l2;
  if (!l2) return l1;

  const curr = new Node(l1.value);
  curr.next = zip(l2, l1.next);
  return curr;
}

module.exports = { Node, zip };
=======
};

module.exports = {Node: Node, zip: zip};
>>>>>>> a77205c41e32f0af3cd87986d552a949a9c56047
