// 타입 단언
var a;
a = 20;
a = 'a';
var b = a as string;
// 타입스크립트 말고 개발자의 관점에서 타입을 정의해주는 것


// DOM API 조작할 때 자주 쓴다.
// <div id="app">hi</div>

var div = document.querySelector('div');
if (div){
  // div.innerText ...
}
