const arr = [11, 22, 33, 44, 55, 66, 77, 88];
/* forEach(value, index, array, function(){}): index, array는 생략 가능 */

// function fn1(v, i, a) {
//   console.log('value:', v); // 값:
//   console.log('index:', i); // 인덱스:
//   console.log('array:', a); // 배열: 
// }

function fn1(v, i) {
  console.log('value:', v); // 값:
  console.log('index:', i); // 인덱스:
  // console.log('array:', a); // 배열: 
}
arr.forEach(fn1);
console.log('===================');
arr.forEach((v, i) => {
  if (v%2==0) {
    console.log(`arr[${i}]: ${v}`); 
  }
});

console.log('===================');
let arr2 = arr.map(e => e-100);
arr2.forEach((v, i) => {
  if (v%2==0) {
    console.log(`arr[${i}]: ${v}`); 
  }
});
console.log('===================');
const play = ['밥먹자', '뛰놀자', '공부하자', '잠자자'];
const xKey = ['식사', '플레이', '스터디', '수면'];
let obj = {};
play.forEach((v,i)=>{
  obj[xKey[i]] = v;
});
console.log(obj);