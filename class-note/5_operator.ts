// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// type의 장점을 살리면서 문제를 해결하는 방법
// 파라미터나 변수에 하나의 타입 이상을 쓸 수 있게 하는 것 : union type
var heedong: string | number | boolean;

function logMessage(value: string | number) {
  //타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정
  if(typeof value === 'number'){
    value.toLocaleString(); // Number에 대한 속성을 사용 할 수 있다.
  }
  if(typeof value === 'string') {
    value.toString();
  }
  // console.log(value);
  // type에 대한 에러를 던질 수 있다.
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // 공통된(보장된) 속성에 대해서만 속성을 제공한다. skill이나 age를 쓰고 싶으면 타입가드!
  // someone.name; // 공통된 속성인 name
}
askSomeone({name: 'Developer', skill: '웹개발'});
askSomeone({name: '민주', age: 100});


function ask2Someone(someone: Developer & Person) {
  // 인터섹션 타입은 모든 속성을 바로 접근할 수 있다.
  someone.name;
  someone.skill;
  someone.age;
}
ask2Someone({name: '민주', skill: '웹 개발', age: 34}) // 모든 속성을 다 넣어주어야 한다.

// var seho: string | number | boolean;
// 인터섹션 타입
// var capt: string & number & boolean; // never
