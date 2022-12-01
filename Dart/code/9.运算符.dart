// ??= ：如果左边值为空，将右边值赋值给左边
// ~/ ：整除

void main() {
  dynamic b = null;
  b ??= 20;
  print('b: $b');
  print('5~/3: ${5 ~/ 3}');
}
