/* 얕은 복사 (객체 주소만 복사): 요소가 함께 바뀜 */
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr;
console.log(arr, arr2);
arr2[7] = 100;
console.log(arr, arr2);

/* 
  ...[]: 전개 연산자(배열의 요소 복사, 비교에 사용) 
  전개 연산자로 깊은 복사: 원 배열의 요소가 그대로 유지됨
*/
const srr = [11, 12, 13, 14, 15];
const arr3 = [...srr];
arr3[7] = 12345;
console.log(srr, arr3);

const arr4 = Array.of(1, 2, 3, 4);
arr4[5] = 0;
console.log(arr4);

/* 깊은 복사 응용: Math 함수 사용하기 */
let n1 = Math.max(1, 2, 3, 4, 5, 6, 7);
console.log('max:', n1);
let n2 = Math.max(...[11, 22, 33, 44, 55]);
console.log('max:', n2);
