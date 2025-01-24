// ES6 부터 Rest Parameter 도입

function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15