interface User {
  age: number;
  name: string;
}

// User라고 하는 것들을 반복되는 타입들에 대해서 하나로 정의해놓음
// 상호간의 약속 

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
// 이 함수는 항상 특정 형식을 준수하는 데이터만 받겠다.

function getUser(user: User) {
  console.log(user);
}

const capt = {
  age: 33,
  name: '캡틴'
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
  (a: number, b: number): number;
}

let sum: sumFunction;
sum = function(a: number, b: number): number {
  return a+b;
}

// function sum(a,b) {
//   return a+b;
// }

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var array: StringArray = ['a', 'b', 'c'];

// arr[0] = 10;

// 배열의 인덱스는 항상 숫자

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.hs$/,
}

// obj2['cssFile'] = 'a'
// RegExp가 아니라 문자열이라서 에러가 난다

//추론
Object.keys(obj2).forEach(function(value){});

// 인터페이스 확장
// 상속받아서 확장해서 쓸 수 있도록 하는 것
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  // name: string;
  // age: number;
  language: string;
}

// Person을 확장한 Developer를 가지고 객체 선언
var minju: Developer = {
  language: 'hi',
  name: '뭉구',
  age: 25
}