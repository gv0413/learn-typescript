// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3];

let heroes: Array<string> = ['capt', 'thor', 'hulk']; //10넣으면 빨간줄 에러!

// TS 튜플 : 배열의 모든 인덱스의 타입이 정의되어 있다.
let address: [string, number] = ['gangnam', 100];

// TS 객체 
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };

let person:{ name: string, age: number} =  {
  name: 'capt',
  age: 40
}

// TS 진위값
let show: boolean = true;
