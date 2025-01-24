// 참고할 만한 다른 해결 방법: Array.from

// 요소가 3개인 배열을 생성, 인덱스를 반환하는 함수를 요소로 추가한다.
// 배열 요소로 추가된 함수는 모두 클로저
const fs = Array.from(new Array(3), (_, i) => () => i);
console.log(fs);
// [ [Function (anonymous)], [Function (anonymous)], [Function (anonymous)] ]

// 배열 요소로 추가된 함수들을 순차적으로 호출
fs.forEach(f => console.log(f())); // 0 1 2