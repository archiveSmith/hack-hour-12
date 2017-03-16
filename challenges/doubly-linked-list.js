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
//   const node = new Node();
//   node.val = val;
//   node.prev = this.tail;
//   this.tail.next = node;
//   this.tail = node;
//   if (!this.head) this.head = node;
// };

LinkedList.prototype.add = function (val) {
	if (!this.head) {
		this.head = new Node(val);
		this.tail = this.head;
	}
	else {
		this.tail.next = new Node(val);
		this.tail.next.prev = this.tail;
		this.tail = this.tail.next;
	}
};

/*
Removes the first node with the inputted value
 */
// LinkedList.prototype.remove = function(val) {
//   let currNode = this.head;
//   let prevNode;
//   while (currNode) {
//     if (currNode.val === val) {
//       if (currNode === this.head) {
//         this.head.next.prev = null;
//         this.head = this.head.next;
//         // console.log('Head with ' + val + ' removed');
//         return;
//       }
//       currNode.next.prev = prevNode;
//       prevNode.next = currNode.next;
//       // console.log('Node with ' + val + ' removed');
//       return;
//     }
//     prevNode = currNode;
//     currNode = currNode.next;
//   }
//   // console.log(val + ' not found');
//   return;
// };

LinkedList.prototype.remove = function (val) {
	let cur = this.head;
	while (cur) {
		if (cur.val === val) {
			switch (cur) {
				case this.head:
					this.head = cur.next;
					if (this.head) this.head.prev = null;
					if (cur !== this.tail) break;
				case this.tail:
					this.tail = cur.prev;
					if (this.tail) this.tail.next = null;
					break;
				default:
					cur.prev.next = cur.next;
					cur.next.prev = cur.prev;
					break;
			}
			return cur;
		}
		cur = cur.next;
	}
};

// const list = new LinkedList();
// list.head = list.tail = new Node();
// list.head.val = 1;
// console.log(list);
// list.add(2);
// console.log('2',list);
// list.add(3);
// console.log('3',list);
// list.remove(2);
// console.log('-2',list);

module.exports = LinkedList;
