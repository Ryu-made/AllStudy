console.log('='.repeat(15));

const lotto = count => {
  const log = Array(45).fill(0);
  for(let i = 0; i < count; i++) {
    const set = new Set();
    let len = 6;
    while (set.size < len)
      set.add(Math.floor(Math.random() * 45 + 1));
    
    const arr = [];
    for (entry of set.entries())
      arr.push(entry[1]);
    arr.sort();
    for(let a of arr) log[a-1]++;
  }
  return log;
};

const compareTotal = log => {
  let total = 0;
  for (const c of log)
    total += c;
  return total;
};

const run = () => {
  const count = 100000;
  const log = lotto(count);
  console.log(log);
  const total = compareTotal(log);
  if (total == count*6) return log;
  else throw new Error(`오류가 발생함 {total:${total}}`);
}

let log = run();