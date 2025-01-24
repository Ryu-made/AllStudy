var son = {
  'last-name': 'Jeong',
  0: 20
};

// console.log(son.'last-name'); // SyntaxError: Unexpected string
// console.log(son.last - name); // Node.js: ReferenceError: name is not defined
// 브라우저 환경: NaN

// 식별자 규칙에 벗어난 프로퍼티는 이 방법 하나만 호출 가능하다.
console.log(son['last-name']); // 'Jeong'
// console.log(son[last - name]); // ReferenceError: last is not defined

// 프로퍼티 키가 숫자(로 이뤄진 문자열)일 경우 따옴표 생략 가능하다.
console.log(son[0]); // 20
console.log(son['0']); // 20
