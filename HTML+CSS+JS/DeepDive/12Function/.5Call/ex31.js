function multiply(x, y) {
  return // ASI 기능에 의해 세미콜론이 
  x * y; // return 이후 줄바꿈된 문장은 무시된다.
}

console.log(multiply(3, 4)); // undefined