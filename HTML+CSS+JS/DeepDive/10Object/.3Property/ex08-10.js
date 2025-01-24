/* (P.129) 프로퍼티 키에 문자열, 심벌이 아닌 다른 타입의 값을 넣으면
 암묵적 타입 변환(숫자 등 -> 문자열)이 이루어진다. 
 (콘솔에 출력 형태는 그대로일 수도 있다.) */

var obj = {
  0: 14,
  1: 28,
  2: 42
};

console.log(obj); // { '0': 14, '1': 28, '2': 42 }

// 프로퍼티 키로 예약어를 지정하는 것은 권장하지 않는다. (문법 에러 X)
var bad = {
  var: 'what',
  null: 'is',
  function: 'code'
};

console.log(bad); // { var: 'what', null: 'is', function: 'code' }

/* 같은 프로퍼티 키를 여러 번 선언하면 
 마지막에 선언한 프로퍼티가 적용된다.
 에러는 발생하지 않는다.
*/
var coffee = {
  ice: 'americano', // 먼저 선언된 값은 무시된다.
  hot: 'capuccino', // 유일한 키라면 그대로 유지된다.
  ice: 'machiatto' // 같은 키 ice에 대해서 이 값만 적용될 것이다.
}

console.log(coffee); // { ice: 'machiatto', hot: 'capuccino' }