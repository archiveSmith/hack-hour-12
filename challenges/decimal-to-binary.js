
function decimalToBinary(n, result = []) {
    if (n <= 1) {
        return result.reverse().join('');
    }
    result.push(Math.floor(n % 2));
    return decimalToBinary(n/2, result)
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(12));
console.log(decimalToBinary(1));