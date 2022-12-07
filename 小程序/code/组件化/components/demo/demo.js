// components/demo/demo.js
Component({
	options:{
		pureDataPattern: /^_/, // 纯数据字段的命名方式
	},
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0,
    },
    fullColor: "0,0,0",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        "_rgb.r": this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5,
      });
    },
    changeG() {
      this.setData({
        "_rgb.g": this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5,
      });
    },
    changeB() {
      this.setData({
        "_rgb.b": this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5,
      });
		},
		_randomColor() {
			this.setData({
				_rgb: {
					r: Math.floor(Math.random()*256),
					g: Math.floor(Math.random()*256),
					b: Math.floor(Math.random()*256),
				}
			})
		}
  },
  observers:{
		'_rgb.r, _rgb.g, _rgb.b':function(newR,newG,newB){
			this.setData({
				fullColor:`${newR},${newG},${newB}`
			})
		}
	},
	// 旧生命周期写法
	created(){
		console.log('created')
	},
	attached(){
		console.log('attached')
	},
	detached(){
		console.log('detached')
	},
	// 新生命周期写法
	lifetimes:{
		created(){
			console.log('created - new')
		},
		attached(){
			console.log('attached - new')
		},
		detached(){
			console.log('detached - new')
		},
	},
	pageLifetimes:{
		show() {
			this._randomColor();
		}
	}
});
