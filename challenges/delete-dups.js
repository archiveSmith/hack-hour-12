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
  if (!head || typeof head !== 'object') return;
  function Node (value) {
    this.value = value;
    this.next = null;
  }
  let temp = head;
  let values = [];
  while (temp) {
    if (values.indexOf(temp.value) === -1){
      values.push(temp.value);
    }
    temp = temp.next;
  }
  let nodes = values.map((item) => {
    return new Node(item);
  })
  for (let i = 0; i < nodes.length -1; i++) {
    nodes[i].next = nodes[i+1];
  }
  return nodes[0];
}

// function Node (value) {
//     this.value = value;
//     this.next = null;
//   }

// let test1 = new Node(1);
// test1.next = new Node(2);
// test1.next.next = new Node(3);
// test1.next.next.next = new Node(3);
// //console.log(test1);

// console.log(JSON.stringify(deleteDups(test1)));

module.exports = deleteDups;
