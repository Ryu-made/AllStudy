var person = {
  name: 'Peter'
};

// 참조 복사(얕은 복사)
var copy = person;
console.log(person === copy); // true

// 복사한 객체의 속성값 변경
copy.name = 'Kang';
person.region = 'Ulsan';

// 서로 다른 속성이 바뀌면 두 변수 모두 동일하게 적용된다.
console.log(copy); // { name: 'Kang', region: 'Ulsan' }
console.log(person); // { name: 'Kang', region: 'Ulsan' }
console.log(person === copy); // true
