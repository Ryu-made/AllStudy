// *브라우저 환경에서는 window 전역 객체, Node.js는 global 전역 객체를 사용한다.

// 문자열 'F'를 16진수로 해석하고 10진수로 변환한다.
let n1 = global.parseInt('F', 16);
let n2 = parseInt('F', 16);
// global을 생략한 결과도 동일하다.
console.log(n1, n2); // 15 15
// 결과적으로 빌트인 객체, 호스트 객체의 호출 방식은 global 생략이 가능하다.
console.log(global.parseInt === parseInt); // true