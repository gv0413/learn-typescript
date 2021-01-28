// 타입 추론 기본 1
var a = '10';

// b를 넘기지 않으면 기본적으로 10을 넣겠다. ES6
function getB(b = 10) {
  var c = 'hi'
  return b + c;
}
// 문자열과 숫자를 더하면 string


// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'hello',
//   title: 'world'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'hello',
  tag: 'k'
}

// Best Common Type: TS가 해당 코드를 어떤식으로 해석하는지 알아보는 알고리즘
var arr = [1, 2, true, true, 'a']; // union type으로 해결
