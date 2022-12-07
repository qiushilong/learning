// components/parent/parent.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		count: 0
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		addCount(){
			this.setData({
				count: this.data.count + 1
			})
		},
		syncCount(e) {
			console.log('syncCount');
			this.setData({
				count: e.detail.value
			})
		},
		getChild() {
			const child = this.selectComponent('.customA');
			console.log(child)
			child.setData({
				count: child.properties.count + 1
			});
			// child.addCount();
		}
	}
})
