{
  class User {
    name: string;
    age: number;

    private site: string;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    info(): string {
      return `${this.name} ${this.age}`;
    }
  }

  const user1 = new User("zs", 12); // 不按照类型提示会报错
  console.log(user1.site); // 属性“site”为私有属性，只能在类“User”中访问。ts(2341)

  class Admin extends User {
    show() {
      return `${this.name} ${this.age} ${this.site}`; // 属性“site”为私有属性，只能在类“User”中访问。ts(2341)
    }
  }
}
