/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
// LinkedList.prototype.add = function(val) {
//   if(!this.head) return this.head = this.tail = new Node(val);
//   let current = this.head;
//   let previous;
//   while(current !== null) {
//     previous = current;
//     current = current.next;
//   }
//   previous.next = new Node(val);
//   previous.next.prev = previous;
//   this.tail = previous.next;
// };

// /*
// Removes the first node with the inputted value
//  */
// LinkedList.prototype.remove = function(val) {
//   let current = this.head;
//   let previous = this.head;
//   while(current !== null) {
//     if(current.val === val) {
//       if(current === this.head) {
//         this.head = this.head.next;
//         if(this.head) this.head.prev = null;
//       }
//       if(current === this.tail) {
//         this.tail = this.tail.previous;
//         if(this.tail) this.tail.next = null;
//       }
//       previous.next = current.next;
//       if(current.next) current.next.prev = previous;
//     }
//     previous = current;
//     current = current.next;
//   }
// };

LinkedList.prototype.add = function(val) {
  if(!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  }


}

LinkedList.prototype.remove = function(val) {
  let curr = this.head;
  while(cur) {
    if(cur.val === val) {
      switch(cur) {
        case this.head:
          this.head = cur.next;
          this.head.prev = null;
          if(this.head) this.head.prev = null;
          if(cur !== this.tail) break;
        case this.tail:
          this.tail = cur.prev;
          if(this.tail) this.tail.next = null;
          break;
        default:
            curr.prev.next = cur.next;
            cur.next.prev = cur.prev;
            break;
      }
      return cur;
    }
    cur = cur.next;
  }



}











const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.remove(2);
console.log(linkedList);

module.exports = LinkedList;
