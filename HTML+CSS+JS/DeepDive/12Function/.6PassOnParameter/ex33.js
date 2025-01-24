function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Song';
}

// 외부 전달 인자
var number = 100;
var person = {
  name: 'Kim'
};

console.log(number, person); // 100 { name: 'Kim' }

// 원시 값은 값 자체가 복사되고 객체는 참조 값(주소)이 복사되어 전달된다.
changeVal(number, person);
// 그래서 원시 값은 그대로이고 객체 값은 훼손(변경)된다.
console.log(number, person); // 100 { name: 'Song' }



