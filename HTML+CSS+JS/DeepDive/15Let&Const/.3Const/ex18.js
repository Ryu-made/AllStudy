// 재할당이 금지된 변수는 상수(constant)라고 부른다.
// 가독성, 유지 보수의 편의를 목적으로 const 키워드를 사용한다.
// const로 선언하는 상수 이름은 전체 대문자로 선언한다. (ex. UPPER_CASE)
// 세율은 변경할 수 없는 상수 값으로 나타낸다.
const TAX_RATE = 0.15;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 115;