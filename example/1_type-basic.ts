// JS 문자열 선언
// var str = 'hello';

// TS 문자열
const str: string = 'hello';

// TS 숫자
const num: number = 10;

// TS 배열
const arr: Array<string> = [];
arr.push('hi');
let arr2: Array<number> = [1,2,3];
let items2: number[] = [1,2,3];

let heroes2: Array<string> = ['capt', 'thor', 'hulk']; //10넣으면 빨간줄 에러!


// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);

// 튜플
const address: [string, number] = ['판교', 40];

// 객체
const obj: object = {};
// obj.a = 10;

// let person: object = {
//   name: 'capt',
//   age: 100
// };

// 타입 객체
let person:{ name: string, age: number} =  {
  name: 'capt',
  age: 101
}

person.age = 101;

// 진위값
let isLogin: boolean = false;