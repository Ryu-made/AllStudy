const arr = [1, 2, 3, 4, 5];
arr.filter(v => v % 2).map(v => v * 3).forEach(console.log);

arr.forEach(alert); // in Node.js: [ReferenceError: alert is not defined]