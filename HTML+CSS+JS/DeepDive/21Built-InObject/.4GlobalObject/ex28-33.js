// 16진수 리터럴(0xn, 0Xn)의 문자열은 16진수로 해석하고 10진수 정수로 반환한다.

const hexadecim = '0x64';
const number = '64';
// 그러므로 아래의 두 출력 결과는 같다.
console.log(`
  parseInt(hexadecim): ${parseInt(hexadecim)} // 리터럴
  parseInt(number, 16): ${parseInt(number, 16)} // 16진수
`);

// 2진수와 8진수 리터럴은 ES5까지는 그대로 해석했지만
// ES6 부터는 모두 10진수로 해석한다. (즉, 뒤의 문자부터 무시하고 0을 반환) 
console.log(`
  parseInt('0b10'): ${parseInt('0b10')}
  parseInt('0o10'): ${parseInt('0o10')}
`);
// 그때는 이 방법으로 진법을 인수로 넣는다.
console.log(`
  parseInt('10', 2): ${parseInt('10', 2)} // 2진수
  parseInt('10', 8): ${parseInt('10', 8)} // 8진수
`);

// 첫번째 인수로 전달된 문자열에 두번째 인수로 전달된 진수로 해석할 수 없는 문자가 있으면 그 문자와 공백을 모두 무시하고 해석한다. 
// 첫 문자부터 해석할 수 없다면 그 뒤의 문자와 상관없이 NaN을 반환한다.
// 예를 들어 2진수로 '10511'을 해석한다면 해석할 수 없는 '5'부터 뒤의 문자를 모두 무시하고 앞의 '10'만 해석하여 2를 반환한다.
console.log(`
${parseInt('24 25 26')}
${parseInt('21 century')}
${parseInt('I like lucky 7')}
${parseInt('  27  ')}
${parseInt('3142', 4)} // 4진수
${parseInt('1798', 8)} // 8진수
${parseInt('FFPL', 16)} // 16진수
`);