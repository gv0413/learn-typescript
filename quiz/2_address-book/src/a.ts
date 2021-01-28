function fetchItems() {
  var items = ['a', 'b', 'c'];
  return items;
}
var result = fetchItems();
console.log(result);

// promise의 생성자를 반환하게 되면, 어떤 타입이 올건지 타입 추론이 안된다.
function fetchItems2(): Promise<string[]> {
  var items: string[] = ['a','b','c'];
  return new Promise(function(resolve) {
    resolve(items);
  })
}

fetchItems2();