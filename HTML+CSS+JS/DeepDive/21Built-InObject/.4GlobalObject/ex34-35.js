// encodeURI / decodeURI 
/** encodeURI: 
 * 완전한 URI를 바탕으로 이스케이프 처리를 위해 인코딩하는 함수이다.
 * URI는 인터넷의 자원을 나타내는 유일한 주소이다. 그 하위개념으로 URL, URN이 있다.
 * URI는 흔히 생각하는 링크의 전체를 포함한다.
 * 그 중에 https:// 부터 쿼리스트링(?..) 전까지의 부분을 URL, 
 * http 등 프로토콜을 나타내는 부분(Scheme)을 제외한 전체를 URN이라 한다.
 * URI에서 일반적으로 숨겨지는 부분은 포트(Port)이다.
 * 
 * @param {string} uri - 완전한 URI
 * @returns {string} - 인코딩된 URI
 * 
 * decodeURI:
 * 이미 인코딩된 URI를 바탕으로 이스케이프 처리 이전의 문자열로 변환하는 함수이다.
 * 
 * @param {string} encodeURI - 인코딩된 URI
 * @returns {string} - 디코딩된 URI
 */

/*
  URI 문법 형식 표준 RFC3986에 따르면
  URL은 아스키 문자 셋으로만 구성되어야 한다.
  그래서 한글을 포함한 대부분의 비영어권 문자와
  아스키 문자 셋에 정의되지 않은 특수 문자는 URL에 포함될 수 없다.
  URL 내의 의미를 가지는 문자(%, ?, #)과 공백, 
  시스템에 의해 해석될 수 있는 문자(<, >)를 포함해
  문제가 발생할 가능성이 있는 문자는 모두 이스케이프 처리가 먼저 필요하다.
  물론 제외되는 문자도 정해져 있다.
*/

// URI 문자열
const uri = 'http://example.com?name=김땡땡&job=programmer&teacher=';
// URI를 인코딩하기
const encode = encodeURI(uri);
console.log(encode);
// http://example.com?name=%EA%B9%80%EB%95%A1%EB%95%A1&job=programmer&teacher=

// 인코딩된 URI를 디코딩하기
const decode = decodeURI(encode);
console.log(decode);
// http://example.com?name=김땡땡&job=programmer&teacher=
