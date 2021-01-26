// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText('hello');

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>('하이');
// 로그텍스트에 인자를 넘길건데 그 인자의 타입은 string이다.
// 호출하는 시점에 문자열, 숫자 등 타입을 넘겨줄 수 있는 것

function logText2(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText2('hello');
const num = logNumber(10);
// logText2(true);

// -------------------------------

function logText3(text: string | number) {
  console.log(text);
  return text;
}
// const a = logText3('a');
// a.split('') 
// output이 string 혹은 number이기 떄문에 string과 number 모두에서 제공되는 api만 사용 가능해진다.
// 그래서 split은 string에서만 가능하기 떄문에 에러로 판단

logText3(10);

// ----------------------

function logText4<T>(text: T): T {
  console.log(text);
  return text;
}

const abc = logText4<string>('abc'); // string
abc.split('');
const login = logText4<boolean>(true); // boolean

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown2<T>{
  value: T;
  selected: boolean;
}

const obj2: Dropdown2<string> = {value: 'abc', selected: false};

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] { 
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);
'abc'.length //3

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends  LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2('a');
// logTextLength2(10);


// 재내릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number; // 재고
}

// ShoppingItem의 키값들 중 한 가지가 제네릭 T가 된다. name, price, stock 중 한가지가 들어갈 수 있게 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name')