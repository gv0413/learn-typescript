interface Developer{
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person { 
  return {name: 'Tony', age: 33, skill: 'Iron Making'}
}

var tony = introduce(); // Developer | Person
console.log(tony.name); // 공통된 속성만 접근할 수 있기 때문에 skill은 접근이 안됨

if((tony as Developer).skill) { // 타입 단언
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}


//타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined; // skill이 있을 때는 developer이다. 
  // 통과하면 타입을 true, false로 볼 수 있다.
}

if (isDeveloper(tony)) {
  console.log(tony.skill)
} else {
  console.log(tony.age)
}