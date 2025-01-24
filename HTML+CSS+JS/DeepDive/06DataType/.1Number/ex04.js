var n1 = 10 / 0;
var n2 = -10 / 0;
var n3 = 1 * 'not a number';
console.log(`${n1}: 무한대`); // Infinity
console.log(`${n2}: 음의 무한대`); // -Infinity
console.log(`${n3}: 산술 연산 불가`); // NaN: "N"ot "a" "N"umber