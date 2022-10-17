{
  // get set 来自 js
  class User {
    private _name: string;

    constructor(name: string) {
      this._name = name;
    }

    public get name(): string {
      return `name: ${this._name}`;
    }

    public set name(name: string) {
      this._name = name + " changed";
    }
  }

  const user = new User("zs");
  console.log(user.name);
  user.name = "ls";
  console.log(user.name);
}
