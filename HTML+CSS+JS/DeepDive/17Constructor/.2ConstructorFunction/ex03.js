// 객체 리터럴로 여러 객체 생성하면 같은 프로퍼티를 여러 번 작성해야 하므로
// 비효율적이고 번거롭다.
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20