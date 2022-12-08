import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../../store/store";
Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      numA: () => store.numA, // 绑定字段方式一
      numB: (store) => store.numB, // 绑定字段方式二
      sum: "sum", // 绑定字段方式三
    },
    actions: {
			updateNum1: "updateNum1",
      updateNum2: "updateNum2",
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
		btnHander2(e) {
			this.updateNum2(e.target.dataset.step)
		},
		btnHander1(e) {
			this.updateNum1(e.target.dataset.step)
		}
	},
});
