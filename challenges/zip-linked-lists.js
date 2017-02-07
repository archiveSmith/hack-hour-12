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
  //if(l1 === null) return;
  let tmp1 = tmp2 = null;
  let firstNode = (l1) ? l1 : l2;

  // as long as both lists are still going, zip 'em!
  while (l1 && l2) {
    // set up tmps to secure the next level of each list
    tmp1 = (l1) ? l1.next : null;
    tmp2 = (l2) ? l2.next : null;

    if(l1) {
      // if l2 is still going, use it, otherwise don't
        l1.next = (l2) ? l2 : l1.next;
    }
    if(l2) {
      // if l1 is still going (tmp1), use it.  Otherwise don't
        l2.next = (tmp1) ? tmp1 : l2.next;
    }

    l1 = tmp1;
    l2 = tmp2;
  }
  // return the very first node of the list
  return firstNode;

};

/// testing
//list1 = null;
const list1 = new Node('A');
list1.next = new Node('B');
list1.next.next = new Node('C');

//list2 = null;
const list2 = new Node('1');
list2.next = new Node('2');
list2.next.next = new Node('3');
list2.next.next.next = new Node('4');
list2.next.next.next.next = new Node('5');

let node = zip(list1,list2);

while (node) {
  console.log(node.value);
  node = node.next;
}

module.exports = {Node: Node, zip: zip};
