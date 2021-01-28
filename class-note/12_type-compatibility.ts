// interface
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;
// developer = person; -> err!
// person은 name밖에 없는데 developer는 name과 skill이 있어서(부분집합 )
// 오른쪽에 있는 타입이 더 큰 관계라면 가능함
person = developer;

// 구조적 타이핑 : interface끼리만, class끼리만 타입 호환이 되는 것이 아니라, 내부 속성에 의해 결정되는 것!

// 함수
// 표현식
var add = function(a: number) {
  // console.log(a)
}

var sum = function(a: number, b: number) {
  // return a + b;
}

// add = sum; -> sum은 두 개의 인자 즉 더 넓은 범위이기 때문에 err
sum = add; // 호환 가능

interface Empty<T> {
  // ..
}
var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2; -> 안됨
// notempty2 = notempty1; -> 안됨