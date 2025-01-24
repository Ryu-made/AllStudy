// 2. 네임스페이스 객체

// 전역 네임스페이스 객체를 선언한다.
var MYAPP = {};

MYAPP.name = 'Park';
console.log(MYAPP.name); // 'Park'

MYAPP = {};
// 네임스페이스를 계층적으로 구성하기
MYAPP.person = {
  name: 'Seong',
  region: 'Daegu'
};

console.log(MYAPP.person.name); // 'Seong'
console.log(MYAPP.person.region); // 'Daegu'

// 결과적으로 식별자 충돌 방지 효과는 있으나,
// 네임스페이스 자체가 전역 변수에 할당되어서 유용한 방법은 아니다.