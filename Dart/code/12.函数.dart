int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 匿名方法
var printHello = () {
  print('hello');
};

void main() {
  var result = fibonacci(20);
  print(result);
  printHello();
  (() {
    print('自己执行');
  }());
}
