// 배열의 map() 메소드
const arr1 = [2, 4, 6, 8, 1, 3, 5, 7];
const arr2 = arr1.map(v => v); // v:value
const arr3 = arr1.map(v => v*v);
const arr4 = arr1.map((v,i) => i); // i:index
console.log('arr1:', arr1);
console.log('arr2:', arr2);
console.log('arr3:', arr3);
console.log('arr4:', arr4);
console.log('arr1:', arr1);
console.log('arr1.sort():', arr1.sort());
console.log('arr1.filter():', arr1.filter(v => v%3==0));
console.log('arr1:', arr1); // sort()가 적용됨


