// 可以创建一个被任意具体类扩展（或实现）的抽象类。
// 抽象类可以包含抽象方法（不包含方法体）。
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('---------');
    describe();
    print('----------');
  }
}

// 任意一个扩展了 Describable 的类都拥有 describeWithEmphasis() 方法，这个方法又会去调用实现类中实现的 describe 方法。