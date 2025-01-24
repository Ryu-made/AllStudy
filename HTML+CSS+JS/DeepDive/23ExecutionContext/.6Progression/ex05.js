// Nodejs 환경에서: Object.prototype.toString
console.log(global.toString()); // [object global]
console.log(global.__proto__.__proto__ === Object.prototype); // true

/* 
// 브라우저 환경에서: Object.prototype.toString
console.log(window.toString()); // [object window]
console.log(window.__proto__.__proto__.__proto__.__proto__ === Object.prototype); // true
*/