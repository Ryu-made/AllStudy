var score = 85;
// 원시 값은 '값에 의한 전달'이 이루어진다.
var score_copy = score;
console.log(score, score_copy); // 85 85

score = 110;
// 각각의 변수에 할당된 값은 그대로 유지
console.log(score, score_copy); // 110 85