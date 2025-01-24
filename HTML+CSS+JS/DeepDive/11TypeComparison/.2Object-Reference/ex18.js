var per1 = {
  name: 'Song'
};

var per2 = {
  name: 'Song'
};

// 객체 자체는 내용이 같아도 항상 다른 참조 주소를 갖는다(false).
console.log(per1 === per2); // false
// 객체 속성 값이 원시 타입이면 같은 값이 된다(true).
console.log(per1.name === per2.name); // true

// (12장에서 계속)