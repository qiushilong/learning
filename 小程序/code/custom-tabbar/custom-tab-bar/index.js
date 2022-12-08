// custom-tab-bar/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		active: 0,
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onChange(event) {
			// event.detail 的值为当前选中项的索引
			console.log(event.detail)
			this.setData({ active: event.detail });
		},
	}
})
