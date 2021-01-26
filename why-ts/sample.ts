function add(a: number, b: number): number {
  return a+b;
}

var result = add(10, 20);
result.toLocaleString(); 

//result.까지 입력했을때 숫자에서 쓸 수 있는 api를 바로 볼 수 있게 된다

// add(10, '20'); 
// '20'이 숫자가 아니기 때문에 코드상에서 에러를 확인할 수 있다.
// 즉, 타입을 정해줌으로써 에러를 사전에 방지할 수 있다.