// components/test/test.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// name:String,
		name:{
			type:String,
			value:'...'
		},
		max: Number
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
		add(){
			this.setData({
				count: this.data.count + 1
			})
			this._showCount();
		},
		_showCount(){
			wx.showToast({
				title: `count 是 ${this.data.count}`,
			})
		},
		showinfo(){
			console.log(this.data);
			console.log(this.properties);
			console.log(this.data===this.properties)
		},
		addMax(){
			this.setData({
				max: this.properties.max + 1
			})
		}
	}
})
