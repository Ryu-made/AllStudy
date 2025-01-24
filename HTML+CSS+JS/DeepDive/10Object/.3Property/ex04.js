var person = [
  {
    name: {
      // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
      firstName: 'Daehyun',
      last_name: 'Ryu'
    }
  },
  {
    name: {
      // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키 (''로 묶기)
      'first-name': 'Daehyun',
      '%lastName': 'Ryu'
    }
  },
];

console.log(person[0]); // { name: { firstName: 'Daehyun', last_name: 'Ryu' } }
console.log(person[1]); // { name: { 'first-name': 'Daehyun', '%lastName': 'Ryu' } }
console.log(person[1].name['%lastName']); // 'Ryu'