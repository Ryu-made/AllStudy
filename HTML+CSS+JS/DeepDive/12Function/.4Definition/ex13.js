// Function 생성자로 함수 선언하기 (권장X)
var add = new Function('x', 'y', 'return x + y;');
console.log(add(3, 4)); // 7