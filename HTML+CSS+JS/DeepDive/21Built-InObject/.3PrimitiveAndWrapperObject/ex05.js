/* 
예시로 문자열 값을 마침표 표기법으로 접근하면 String 생성자 함수의 인스턴스가 생성되고, 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
*/
// 변수(상수)에 원시 타입인 문자열값 할당
const str = 'see';

// 래퍼 객체인 String 인스턴스로 일시 변환
console.log(str.length); // 3
console.log(str.toUpperCase()); // 'SEE'

// 프로퍼티 호출 이후에는 다시 원시 값으로 되돌림
console.log(str, typeof str); // 'see' string

