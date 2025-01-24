// 함수 객체 생성
function foo() {
  console.log(this);
}

// 일반적인 함수로서의 호출: [[Call]]
foo(); // <ref *1> Object [global] { ... }

// 생성자 함수로서의 호출: [[Construct]]
new foo(); // foo {}