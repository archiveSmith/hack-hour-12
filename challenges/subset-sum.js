function subsetSum(array, target){
    if (target === undefined) return [];
    if (array.length == 0) {
        if (target == 0) return true;
        return false;
    } else {
        let i = array[0];
        return subsetSum(array.slice(1),(target - i)) || subsetSum(array.slice(2),target);
    }
}

var arr1 = [3,7,4,2]
console.log(subsetSum(arr1, 5))
var arr2 = [3,34,4,12,5,12]
console.log(subsetSum(arr2, 32))
var arr3 = [8,2,4,12]
console.log(subsetSum(arr3, 13))
var arr4 = [8,-2,1,-3]
console.log(subsetSum(arr4))
var arr5 = [6]
console.log(subsetSum(arr5, 6))
var arr6 = []
console.log(subsetSum(arr6, 6))
