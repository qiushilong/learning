{
  abstract class Animation {
    public abstract name: string;
    abstract move(): void;
  }

  class Tank extends Animation {
    public name: string;
    move() {}
  }
}
