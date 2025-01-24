const words = ['kiwi', 'orange', 'banana', 'exuberant', 'destruction', 'present', 'glass', 'english', 'iphone', 'network', 'matrix', 'armmy', 'bunny'];
let filtered = words.filter(w => w.length >= 6);
filtered.forEach(w => console.log(`${w}[${w.length}]`));
console.log(`배열에서 6글자 이상인 문자열이 총 ${filtered.length}/${words.length}개 발견되었습니다.`);
