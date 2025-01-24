// 깊은 복사, 얕은 복사..

const o = { x: { y: 1 } };
// 얕은 복사
const c1 = { ...o }; // (스프레드 문법)
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// loadash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후 Node.js에서 실행

const _ = require('lodash'); // 설치한 lodash 모듈 가져오기(?)
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false