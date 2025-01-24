// isNaN:
// 전달받은 인수가 NaN인지 검사한다.
// - 인수의 타입이 숫자가 아니면 숫자로 타입 변환 후 검사한다.
// - 결과적으로 NaN이면 true를 반환하고, 그렇지 않으면 false를 반환한다.

// 인수가 NaN인 경우(true)
console.log(`
${NaN}, ${isNaN(NaN)}
${'str'}, ${isNaN('str')} // 'str' -> String
${'number 42'}, ${isNaN('number 42')} // 'number 42' -> String
${undefined}, ${isNaN(undefined)} // undefined -> undefined
${{}}, ${isNaN({})} // {} -> Object
${new Date().toString()}, ${isNaN(new Date().toString())} // Object.prototype.toString() -> String
`);

// 인수가 숫자값 혹은 숫자로 타입 변환이 가능한 경우(false)
// *숫자와 문자가 모두 포함된 문자열 값이면 처음에 숫자로 시작할 때 그 숫자값만 암묵적으로 변환하고 나머지는 버린다.
console.log(`
  ${12}, ${isNaN(12)}
  ${'12'}, ${isNaN('12')} // '12' -> 12
  ${'12.34'}, ${isNaN('12.34')} // '12.34' -> 12.34
  ${'24 people'}, ${isNaN('24 people')} // '24 people' -> 24
  ${null}, ${isNaN(null)} // null -> 0
  ${new Date()}, ${isNaN(new Date())} // new Date() -> Number
  ${''}, ${isNaN('')} // '' -> 0
  ${'    '}, ${isNaN('    ')} // '    ' -> 0
  `);