// (생성자 함수로서 정의하지 않은) 일반 함수
function add(x, y) {
  return x + y;
}

// 일반 함수를 new 연산자와 함께 호출
let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. (기본값인 빈 객체 생성)
console.log(inst); // add {}

// '객체'를 반환하는 일반 함수
function createUser(name, role) {
  return { name, role };
}

// 일반 함수를 new 연산자와 함께 호출
inst = new createUser('Kang', 'hadoop');

// 함수가 생성한 객체를 그대로 반환한다.
console.log(inst);// { name: 'Kang', role: 'hadoop' }