console.log(Math.min(3, 6, 9));
console.log(Math.min([3, 6, 9]));

//ES5
console.log(Math.min.apply(null, [3, 6, 9]));

//ES6
console.log(Math.min(...[3, 6, 9]));

let x = [3, 4, 17];
console.log(Math.max(1, 3, ...x, 19));

console.log([1, 3, 6, ...x, 5]);