interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

// 인터페이스, 타입별칭을 이용한 타입 정의는 표기법은 같음
// Person에 마우스 커서 갖다 대면 type을 쓸 때가 좀 더 자세히 보인다
var seho: Person = {
  name: '세호',
  age: 30
}

type Mystring = string;
var str2: Mystring = 'hello';


// 타입 별칭
type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo) {}

// 인터페이스와 타입 별칭의 차이
// 타입 별칭은 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
// 타입 별칭을 쓰면 VSCode 프리뷰 상태로 타입 어떤거 있는지 볼 수 있음. 인터페이스는 cmd+클릭 해서 볼 수 있음.
// 타입 별칭은 확장이 되지 않는다.