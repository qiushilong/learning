// 数组在 dart 中以 List 呈现
var list = ['张三', 20, true];
List<String> strList = ['张三', '李四'];
var dynamicList = [];
// var oldList = new List(); // deprecated
var fillList = List.filled(2, 'content'); // 长度为 2，不可变

void main() {
  print(list.length);
  print(list[0]);
  strList.add('王五');
  print(strList);

  dynamicList.add('zs');
  dynamicList.add('ls');
  print(dynamicList);

  // fillList.add('content'); // Cannot add to a fixed-length list
}
