function isFalsy(v) {
  console.log(!v); // !는 불리언 반전(0 => true)
}

function isTruthy(v) {
  console.log(!!v); // !!는 불리언 원본값으로 전환(0 => false)
}

isFalsy(null)
isFalsy(undefined)
isFalsy(0)
isFalsy(NaN)
isFalsy('')

isTruthy('0') // 문자열 값 '0'은 Truthy로 취급된다.
isTruthy('string')
isTruthy(10)
isTruthy({})
isTruthy([])
isTruthy(x = 5)
