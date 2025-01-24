/* 문자(string) 자료형 */
const str = '가나다' + '라마바'[1] + '사아자'[2];
document.write('<h3 style="color: green;">' + str + '</h3>');
console.log(str);
/* 숫자(정수 integer) 자료형 */
const num1 = 20+30*50;
const num2 = (20+30)*50;
const nr = ['20 + 30 * 50 = ', num1, '</br>', '(20 + 30) * 50 = ', num2];
document.write('<p style="color: blue;">' + nr.join(' ') + '</p>');
console.log(nr);
/* 불(bool) 자료형 */
const bl1 = 1234 == '1234'; // true(값만)
const bl2 = 1234 === '1234'; // false(자료형)
const bl3 = '사랑' > '우정';
const b1 = !true;
const b2 = !!false;
const b3 = 100 > 200;
const br = [bl1, bl2, bl3, b1, b2, b3];
document.write('<p style="color: red;">' + br.join(', ') + '</p>');
console.log(br);