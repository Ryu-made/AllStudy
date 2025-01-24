// Number.prototype.toString 메소드로 숫자를 원하는 진수로 변환할 수 있다.
// 그 후 parseInt로 다시 다른 진수로 해석할 수도 있다.
// toString에 인수를 넣지 않으면 기본값으로 10진수로 변환한다.
const x = 15;

console.log(`
x.toString(): ${x.toString()}
x.toString(2): ${x.toString(2)}
parseInt(x.toString(2), 2): ${parseInt(x.toString(2), 2)}
parseInt(x.toString(2), 8): ${parseInt(x.toString(2), 8)}
parseInt(x.toString(2), 16): ${parseInt(x.toString(2), 16)}
`);