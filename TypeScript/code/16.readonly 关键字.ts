class Axios {
  readonly site: string = "https://www.baidu.com";
  public readonly name: string;
}

const instance = new Axios();
instance.site = "https://www.google.com"; // 无法分配到 "site" ，因为它是只读属性。ts(2540)
