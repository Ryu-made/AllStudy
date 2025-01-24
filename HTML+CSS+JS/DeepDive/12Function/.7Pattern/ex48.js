// 중첩 함수(nested function): 자신 외부의 함수를 돕는 헬퍼 함수(helper function) 역할
function outer() {
  var a = 2;
  function inner() {
    var b = 3;
    // 외부 함수의 변수 참조
    var res = a + b;
    console.log(res); // 5
  }

  inner();
}

outer(); // outer 함수 호출할 때 inner 함수도 같이 호출됨.