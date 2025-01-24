// 'use strict';를 코드 선두에 선언함으로써 전역에서 엄격한 에러를 야기한다. (잠재적 위험 감소)
'use strict';
function foo() {
  x = 10; // ReferenceError: x is not defined
}

foo();

// 'use strict';는 전역이나 지역 스코프에 모두 적용 가능한데
// 지역 스코프는 함수 몸체 내부 선두에 선언하면 된다.
function foo2() {
  'use strict';
  y = 20; // ReferenceError: y is not defined
}

foo2();

// 'use strict';의 위치가 코드/블럭의 선두가 아니라면 strict mode가 제대로 동작하지 않을 수 있다.

function foo3() {
  z = 30; // 에러를 발생시키지 않고 암묵적 전역이 이루어진다.
  'use strict';
}

foo3();