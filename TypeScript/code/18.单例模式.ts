{
  class Axios {
    private static instance: Axios | null = null;
    private constructor() {}

    static make(): Axios {
      if (Axios.instance === null) {
        Axios.instance = new Axios();
      }

      return Axios.instance;
    }
  }
}
