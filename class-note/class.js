// ES2015 (ES6)이전 생성자 함수 이용
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100)


// ES2015 (ES6)이후 클래스 이용
class Person {
  // 클래스 로직
  // 인스턴스를 만들어주자
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var minju = new Person('민주', 30); // '생성 되었습니다.' 출력
console.log(minju);