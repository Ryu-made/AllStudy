const obj = {
  2: 2,
  3: 3,
  5: 5,
  1: 1,
  4: 4,
  b: 'b',
  a: 'a',
  c: 'c'
};

// for ... in 문은 프로퍼티를 선언한 순서를 보장하지 않지만
// 모던 브라우저는 대체로 순서를 보장(숫자는 정렬)한다.
for (const prop in obj) {
  if (!obj.hasOwnProperty(prop)) continue;
  console.log(`${prop}: '${obj[prop]}'`);
}

/* 
1: '1'
2: '2'
3: '3'
4: '4'
5: '5'
b: 'b'
a: 'a'
c: 'c'
*/