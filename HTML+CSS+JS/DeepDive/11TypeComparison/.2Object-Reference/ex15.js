const v = 1; // 원시 값

// 깊은 복사로 부름
const c1 = v;
console.log(c1 === v); // true

const o = { x: 10 }; // 객채 값

// 얕은 복사로 부름
const c2 = o;
console.log(c2 === o); // true