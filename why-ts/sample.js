// function sum(a, b) {
//   return a + b;
  
// }
// sum(10, 20); // 30
// sum(10, '20'); // 1020

// @ts-check 
// 이 주석을 넣으면 자바스크립트 파일인데 타입스크립트 파일처럼 타입이 틀렸을때 검증해준다

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a+b;
}

sum(10,'20')