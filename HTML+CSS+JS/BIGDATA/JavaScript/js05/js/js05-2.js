const sepBar = () => console.log('='.repeat(20));
/* 함수 선언식 */
function fn1() {
  console.log('반갑습니다.');
  return 'Nice to meet you.';
}
console.log('fn1:\n', fn1());
sepBar();

/* 함수 표현식 */
const fn2 = function() {
  console.log('오늘은 뭐하실 예정인가요?');
  return 'What\'s your schedule today?';
}
console.log('fn2:\n', fn2());
sepBar();

/* 화살표 함수 */
const fn3 = name => {
  console.log(`${name}님 안녕하세요.`);
  return `${name}님 반가워요.`;
};
console.log('fn3:\n', fn3('나는야슈퍼맨'));
sepBar();

/* IIFE */
(age => {
  console.log(`당신의 나이는 ${age}세입니다.`);
})(25);
