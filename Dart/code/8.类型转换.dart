// 转 String：xxx.toString()
// 转 int：int.prase(xxx)
void main() {
  int num = 123;
  String str = num.toString();
  print('$str is String: ${str is String}');
  int num2 = int.parse(str);
  print('${num2} is int: ${num2 is int}');
}
