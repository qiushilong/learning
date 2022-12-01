// 虽然 Dart 是代码类型安全的语言，但是由于其支持类型推断，因此大多数变量不需要显示的指定类型：
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flag = true;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};

String name2 = 'Voyager I';
int year2 = 1997;
double antennaDiameter2 = 3.7;
bool flag2 = true;
List<String> flybyObjects2 = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Map<String, Object> image2 = {
  "tags": ['saturn'],
  'url': '//path/to/saturn.jpg'
};

void main() {
  print(name);
  print(name2);
}
