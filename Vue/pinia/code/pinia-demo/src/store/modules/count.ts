import { defineStore } from "pinia";

// 选项式 store
const useCounter = defineStore("counter", {
  state: () => ({
    num: 1,
  }),
  actions: {
    addNum() {
      this.num + 1;
    },
  },
});

export default useCounter;