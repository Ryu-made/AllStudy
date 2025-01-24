// encodeURIComponent / decodeURIComponent
/** 
 * encodeURIComponent:
 * URI 구성 요소(component)를 인수로 인코딩하는 함수.
 * URI 구성 요소는 URL을 제외한 쿼리 스트링(?와 그 이후)의 일부로 본다.
 * 그래서 쿼리 스트링의 구분자(=, ?, &)까지 인코딩한다.
 * encodeURI 함수가 =, ?, &까지 인코딩에서 제외시키는 것과는 다르다.
 * 
 * @param {string} uriComponent - URI의 구성 요소
 * @returns {string} - 인코딩된 URI의 구성 요소
 * 
 * encodeURIComponent(uriComponent)
 * 
 * 
 * decodeURIComponent:
 * 이미 인코딩된 URI의 구성 요소를 인수로 이스케이프 처리 이전으로 디코딩한다.
 * URI에 속한 쿼리 스트링의 일부를 encodeURIComponent로 인코딩한 결과를 
 * 다시 처음으로 되돌린다.
 * 
 * @param {string} encodedURIComponent - 인코딩된 URI의 구성 요소
 * @returns {string} - 디코딩된 URI의 구성 요소
 */

// URI의 구성 요소 문자열
const uriComp = 'name=김땡땡&job=programmer&teacher=';

// 구성 요소를 인코딩하기
const enComp = encodeURIComponent(uriComp);
console.log(enComp);
// name%3D%EA%B9%80%EB%95%A1%EB%95%A1%26job%3Dprogrammer%26teacher%3D

// 인코딩된 구성 요소를 디코딩하기
const deComp = decodeURIComponent(enComp);
console.log(deComp);
// name=김땡땡&job=programmer&teacher=

// URI로써 인코딩/디코딩하기 (제외할 이스케이프 문자가 다르다)
const encode = encodeURI(uriComp);
console.log(encode);
// name=%EA%B9%80%EB%95%A1%EB%95%A1&job=programmer&teacher=

const decode = decodeURI(encode);
console.log(decode);
// name=김땡땡&job=programmer&teacher=