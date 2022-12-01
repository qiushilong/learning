// Dart 没有 interface 关键字。但是所有类都隐式定义了一个接口。因此，任意类都可以作为接口被实现。
class Spacecraft {
  String name = 'Spacecraft';
}

class MockSpaceship implements Spacecraft {
  String name = 'MockSpaceship';
}

void main() {
  print(new MockSpaceship().name);
}
