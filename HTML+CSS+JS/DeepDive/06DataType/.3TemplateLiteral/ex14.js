// 템플릿 문자열은 항상 모든 타입이 문자열로 강제 변환된다는 것을 기억하자.

var a = 1, b = 2, c = 'Hello', d = 'world';

console.log(`
a + b = ${a + b} // 주석은 안됨 ㅎ
c + d = "${c} '${d}'!"
`);
/* [출력 결과: 확실한 출력을 위해 미리 줄바꿈으로 시작함]
a + b = 3 // 주석은 안됨 ㅎ
c + d = Hello world
*/