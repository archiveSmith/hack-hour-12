// Nice job passing the tests for mode-mean ! Check out our solution below and see how it compares to yours. Please don't share this code with others until they've completed the challenge.

function modemean(array) {
  return mean(array) === mode(array);
}

function mean(array) {
  var sum = array.reduce(function(sum, el) {
    return sum + el;
  });
  return Math.floor(sum / array.length);
}

function mode(array) {
  var count = {};
  array.forEach(function(num) {
    if (num in count) {
      return count[num]++;
    }
    count[num] = 1;
  });
  var max = -Infinity;
  var modeCandidates;
  for (var num in count) {
    if (count[num] > max) {
      modeCandidates = [num];
      max = count[num];
    } else if (count[num] === max) {
      modeCandidates.push(num);
    }
  }
  return Math.max.apply(this, modeCandidates);
}

// Nice job passing the tests for fizzbuzz ! Check out our solution below and see how it compares to yours. Please don't share this code with others until they've completed the challenge.

function fizzbuzz(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push('fizzbuzz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

// Nice job passing the tests for kth-to-last-node ! Check out our solution below and see how it compares to yours. Please don't share this code with others until they've completed the challenge.


function kthToLastNode(k, head) {
  var length = 0;
  var curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  var i = length - k;
  curr = head;
  if (i < 0) {
    return undefined;
  }
  while (i--) {
    curr = curr.next;
  }
  return curr.value;
}


function kthToLastNode(k, head) {
  var lead = head;
  var follow = head;
  for (var i = 0; i < k && lead; i++) {
    lead = lead.next;
  }
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }
  return follow.value;
}

// Nice job passing the tests for pow ! Check out our solution below and see how it compares to yours. Please don't share this code with others until they've completed the challenge.

function pow(base, power) {
  if (!power) return 1;
  
  return base * pow(base, power - 1);
}

// Nice job passing the tests for bin-to-dec ! Check out our solution below and see how it compares to yours. Please don't share this code with others until they've completed the challenge.


function binToDec(binary) {
  var len = binary.length;
  var dec = 0;
  var BASE = 2;
  for (var i = 0; i < len; i++){
    dec += binary[i] * Math.pow(BASE,len-1-i);
  }
  return dec;
}
//incomplete: doesn't account for plain 0. does account for leading 0



function decToBin(decimal) {
  let dec = decimal;
  let bin = '';
  let binSpaces = Math.floor(Math.log2(dec));
  while (binSpaces >= 0){
    let temp = Math.pow(2, binSpaces);
    if (dec == temp) {
      bin += '1' + '0'.repeat(binSpaces);
      return bin;
    }
    if (dec > temp) {
      bin += '1';
      dec -= temp;
    } else bin+='0';
    binSpaces--;
  }
  return bin;
}


// Nice job passing the tests for reverse-in-place ! Check out our solution below and see how it compares to yours. Please don't share this code with others until they've completed the challenge.


function reverseInPlace(array) {
  if (!array || !array.length) return [];

  var head = 0;
  var tail = array.length-1;

  while(tail>head){
    var temp = array[head];
    array[head++] = array[tail];
    array[tail--] = temp;
  }
  return array;
}

function reverseInPlace(array) {
  var temp;
  for (var i = 0, j = array.length - 1; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
