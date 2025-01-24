// 전역 변수
let foo = 1;

// {}로 묶인 구문들은 블록 레벨 스코프가 적용됨
{
  // 지역 변수
  let foo = 5; // 전역에 선언된 foo와 별개의 변수로 취급
  let bar = 7;
}

// let 키워드 변수는 호출 시에 블록 레벨 스코프를 따른다.
console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined