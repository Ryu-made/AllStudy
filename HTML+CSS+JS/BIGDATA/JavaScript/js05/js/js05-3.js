const run1 = () => {
  let count = 0;
  const cText = name => {
    console.log(`${name}님 반가워요~!! [${++count}]`);
  }
  const time = 30000; // 단위: ms(밀리세컨드)
  const name1 = '대현';
  // const t1 = setTimeout(cText(name1), time);
  // console.log(t1);
  const i1 = setInterval(cText(name1), 1000);
  console.log(i1);
  
  setTimeout(()=>{
    clearInterval(i1);
    console.log('반복 타이머 종료');
  }, 5000);
};

run1();
