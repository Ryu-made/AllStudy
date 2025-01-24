function countdown1(n = 0) {
  for (var i = n; i > 0; i--) console.log(i);
}

countdown1(10);
/* 
10
9
8
..
1
*/

function countdown2(n = 0) {
  if (n == 0) return;
  console.log(n);
  countdown2(n - 1);
}

countdown2(10);
/* 
10
9
8
..
1
*/