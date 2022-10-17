{
  class User {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    info(): string {
      return `${this.name} ${this.age}`;
    }
  }

  const user1 = new User("zs", 12);
  console.log(user1.name); // 属性“name”受保护，只能在类“User”及其子类中访问。ts(2445)

  class Admin extends User {
    show() {
      return `${this.name} ${this.age}`;
    }
  }

  const admin = new Admin("ls", 14);
  console.log(admin.show());
}
