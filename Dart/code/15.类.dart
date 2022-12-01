/**
 * Spacecraft 类：
 *   1. 三个属性
 *   2. 两个构造函数
 *   3. 一个方法的类
 * 
 * 其中一个属性不能直接赋值，因此它被定义为一个 getter 方法（而不是变量）。
 */
class Spacecraft {
  String name;
  DateTime? launchDate;

  // 只读属性
  int? get launchYear => launchDate?.year;

  // 构造器，名字同类名
  Spacecraft(this.name, this.launchDate) {
    // 初始化操作
  }

  // 构造器，将构造器指定到另一个构造器
  Spacecraft.unlaunched(String name) : this(name, null);

  // 方法
  void describe() {
    print('Spacecraft: $name');
    // Type promotion doesn't work on getters.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

void main(List<String> args) {
  var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
  voyager.describe();

  var voyager3 = Spacecraft.unlaunched('Voyager III');
  voyager3.describe();
}
