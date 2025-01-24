// ES6 이후
const obj = {
  name: 'Hackers',
  // 메서드의 축약 표현
  saySome() {
    console.log(`Hello, ${this.name}.`);
  }
}

obj.saySome(); // 'Hello, Hackers.'