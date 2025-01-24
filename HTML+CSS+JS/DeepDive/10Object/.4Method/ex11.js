var circle = {
  radius: 5, // 프로퍼티 지정

  getDiameter: function () { // 메소드 지정
    return 2 * this.radius; // this는 circle이다. 그러므로 this.radius == 5
  }
};

// 객체의 메서드 호출
console.log(circle.getDiameter()); // 10