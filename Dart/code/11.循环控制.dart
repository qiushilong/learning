void main() {
  var year = 1977;
  var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  // 遍历数组
  for (final object in flybyObjects) {
    print(object);
  }

  // for 循环
  for (int month = 1; month <= 12; month++) {
    print(month);
  }

  // while 循环
  while (year < 2016) {
    year += 1;
  }
  print(year);
}
