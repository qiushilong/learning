class Collection<T> {
  public data: T;

  getData(): T {
    return this.data;
  }
}

const col = new Collection<string>();
