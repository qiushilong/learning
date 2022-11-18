// components/demo/demo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    rgb: {
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
        "rgb.r": this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5,
      });
    },
    changeG() {
      this.setData({
        "rgb.g": this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5,
      });
    },
    changeB() {
      this.setData({
        "rgb.b": this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5,
      });
    },
  },
  observers:{
		'rgb.r, rgb.g, rgb.b':function(newR,newG,newB){
			this.setData({
				fullColor:`${newR},${newG},${newB}`
			})
		}
	}
});
