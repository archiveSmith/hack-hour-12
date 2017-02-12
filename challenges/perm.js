function perms(array, built = [], memo = []) {
    if (!array.length) {
        memo.push(built);
    } else {
        // array.forEach((e, i) => perms(array.slice(0, i).concat(array.slice(i + 1)), built.concat(e), memo));
        array.forEach((e, i) => perms([...array.slice(0, i),...array.slice(i + 1)], [...built.,e], memo));
    }
    return memo;
}

console.log(perms([1,2,3]));