// Mixin 是一种在多个类层次结构中重用代码的方法。下面的是声明一个 mixin 的做法：
mixin Piloted {
  int astronauts =1;
  void describeCrew(){
    print('Number of astronauts: $astronauts');
  }
}

// 只需要使用 mixin 的方式继承这个类就可将类中的功能添加给其他类
/*
class PilotedCraft extends Spacecraft with Piloted {
  ...
}
*/