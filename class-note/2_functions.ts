// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

sum(10, 20);
// 타입 추론


// 함수의 반환 값에 타입을 정의하는 방식
function add(): number{
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number{
  return a + b;
}
sum(10, 20, 30, 40);
// JS에서는 불필요한 인자를 넣어도 유연하게 넘어가지만 TS에서는 에러처리를 해준다.

// 함수의 선택적(옵셔널) 파라미터
function log(a: string, b?: string) {

}
// 써도 되고 안써도 된다는 뜻에서 물음표를 넣는다
log('hello world');
log('hello ts', 'abc');