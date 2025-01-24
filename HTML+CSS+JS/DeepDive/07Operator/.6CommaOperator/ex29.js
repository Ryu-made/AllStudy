// 쉼표 연산자: 마지막 연산(평가) 결과를 반환함
var x, y, z;
console.log((x = 10, y = 12)); // 12
z = 1;
console.log(z = (3, 4, ++z)); // 2
console.log(x); // 10
console.log(y); // 12
console.log(z); // 2