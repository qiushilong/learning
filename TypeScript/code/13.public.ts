{
  class User {
    // 基本使用
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    info(): string {
      return `${this.name} ${this.age}`;
    }

    // public 修饰符（不写默认 public 修饰符）：外部可以访问
    public sex: 1 | 0;
  }

  const user1 = new User("zs", 12); // 不按照类型提示会报错

  for (const key in user1) {
    if (user1.hasOwnProperty(key)) {
      console.log(key, user1[key]);
    }
  }
}
