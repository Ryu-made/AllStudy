// 논리연산자를 이용한 단축 평가
// && 연산자는 양쪽 모두 Truthy이면 뒤의 값을 평가하여 (문자열 그대로) 반환한다.

var ani = 'Cat' && 'Dog'; // Dog
console.log(ani);

var anis1 = [
  'Cat' && 'Dog', // 'Dog'
  undefined && 'Dog', // undefined
  'Cat' && undefined // undefined
];
console.log(anis1);
console.log('='.repeat(10));

// || 연산자는 둘 중 하나만 Truthy여도 그 값을 반환한다. (그러면 뒤를 평가하지 않는다.)

ani = 'Cat' || 'Dog'; // Cat
console.log(ani);

var anis2 = [
  'Cat' || 'Dog', // 'Cat'
  undefined || 'Dog', // 'Dog'
  'Cat' || undefined // 'Cat'
];
console.log(anis2);
console.log('='.repeat(10));