/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function carryOverHelper(n1, n2) {
  if (!n1.value) n1.value = 0;
  if (!n2.value) n2.value = 0;
  const valArr = (n1.value + n2.value + 100).toString().slice(1).split('');
  const val = valArr[1] ? valArr[1] : valArr[0];
  const carryOver = valArr[1] ? valArr[0] : 0;
  return [carryOver, val];
}

function addLinkedList(l1, l2) {
  let output;
  let currOutputNode = output;
  let currL1Node = l1;
  let currL2Node = l2;
  let tempCarryOver = 0;

  while (currL1Node || currL2Node) {
    currOutputNode = new Node();
    const carryOvers = carryOverHelper(currL1Node, currL2Node);
    currOutputNode.value = Number(carryOvers[1]) + Number(tempCarryOver);
    tempCarryOver = Number(carryOvers[0]);
    currOutputNode = currOutputNode.next;
    currL1Node = currL1Node.next;
    currL2Node = currL2Node.next;
  }

  return output;
}

// provided solution 1
function addLinkedList1(num1, num2, carryover) {
  var current1  = num1.next
  var current2  = num2.next
  var tempvalue;
  var answerlist;

  answerlist = new Node((num1.value + num2.value)%10);
  carryover = (num1.value + num2.value)/10<1 ? 0 : 1;

  // Use a while loop to iterate over values
  // Iterate over both linked lists while there is a value  or a carryvalue of  1
  while(current1 || current2 || carryover===1){
    var currentanswer = answerlist
    while(currentanswer.next){
      currentanswer = currentanswer.next
    }
    // On each iteration add the result to the new linked list and if addition results in a
    // carryvalue - add that to next iteration result
    if (!current1 && !current2){
      currentanswer.next = new Node(carryover);
      carryover = 0;
    }
    else if (!current2){
      tempvalue = current1.value + carryover;
      currentanswer.next = new Node(tempvalue%10);
      carryover = tempvalue/10<1 ? 0 : 1;
      current1 = current1.next;
    }
    else if (!current1){
      tempvalue = current2.value + carryover;
      currentanswer.next = new Node(tempvalue%10);
      carryover = tempvalue/10<1 ? 0 : 1;
      current2 = current2.next;
    }
    // Keep iterating even if no values in linked lists as long as there is still a carryover value
    else{
      tempvalue = current1.value + current2.value + carryover;
      currentanswer.next = new Node(tempvalue%10);
      carryover = tempvalue/10<1 ? 0 : 1;
      current1 = current1.next;
      current2 = current2.next;
    }
  }
  // When no values or carryvalue - return new linked list
  return answerlist;
}

var zero = new Node(0);
zero.next = zero;


// Provided Solution 2
function addLinkedList2(num1, num2, carryover) {
  var node1 = num1, node2 = num2, ansNode;
  var ansList = ansNode = new Node(node1.value + node2.value);
  while (node1 || node2) {
    node1 = node1.next || zero;
    node2 = node2.next || zero;
    if (node1 === zero && node2 === zero) break;
    ansNode.next = new Node(node1.value + node2.value);
    ansNode = ansNode.next;
  }
  //handle the carry-overs. this loop handles all but the last digit
  for (ansNode = ansList; ansNode.next; ansNode = ansNode.next) {
    ansNode.next.value += Math.floor(ansNode.value / 10);
    ansNode.value %= 10;
  }
  //handle the last digit
  if (ansNode.value >= 10) {
    ansNode.next = new Node(1);
    ansNode.value %= 10;
  }
  return ansList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
