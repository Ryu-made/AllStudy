document.write('<h2>템플릿 문자열</h2>');
const s1 = '안녕';
const s2 = '나는 유대현이라고 해';
const n1 = 123;
const n2 = 456;
// 템플릿: 백틱(`)으로 감싸기
document.write('<p style="color: blue">' + `${s1}! ${s2}~~ 정말 반갑다 ㅋㅋㅋㅋ 
  키읔키읔 -- + ${n1} + ${n2}` + '</p>');