// ES5 버전
var prefix = 'pre';

var obj = {};
// 프로퍼티 키이름 계산하기
var i = 0;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;


console.log(obj); // { 'pre-0': 0, 'pre-1': 1, 'pre-2': 2 }
