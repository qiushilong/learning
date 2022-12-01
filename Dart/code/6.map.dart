var person = {'name': '张三', 'age': 20};
Map<String, Object> person2 = {'name': '李四', 'age': 22};
var person3 = new Map();

void main() {
  print('$person $person2');
  person2['name'] = '我是王五';
  print('$person $person2');
  person3['name'] = '王五';
  print(person3);
}
