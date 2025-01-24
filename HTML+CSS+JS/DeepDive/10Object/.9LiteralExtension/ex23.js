// ES5 버전
var obj = {
  name: 'Thomas',
  saySome: function () {
    console.log('Hello, ' + this.name + '.');
  }
}

obj.saySome(); // 'Hello, Thomas.'