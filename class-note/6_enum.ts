enum Shoes {
  Nike = '나이키', // 초기화 하지 않으면 0부터 시작해서 1씩 증가한다. 
  Adidas = '아디다스' // 1
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'


enum Answer {
  Yes = 'Y',
  No = 'N',

}

function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion(Answer.Yes);
// askQuestion('y');
// askQuestion('Yes');