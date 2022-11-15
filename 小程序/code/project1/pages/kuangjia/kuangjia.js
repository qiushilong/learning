// pages/kuangjia/kuangjia.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    info: "hello world",
    imgSrc:
      "https://t8.baidu.com/it/u=78686770,366521962&fm=74&app=80&size=f256,256&n=0&f=JPEG&fmt=auto?sec=1668531600&t=b40273327e2138299822338f5439e2c6",
    randomNum: Math.random() * 10,
    num: 0,
    msg: "nihao",
    type: 1,
    arr: ["apple", "huawei", "xiaomi"],
  },
  // 按钮事件处理函数
  btnTapHandler(e) {
    console.log(e);
  },
  addNum() {
    // 设置新的 data
    this.setData({
      num: this.data.num + 1,
    });
  },
  addNum2(e) {
    console.log(e);
    console.log(e.target.dataset.num);
    this.setData({
      num: this.data.num + e.target.dataset.num,
    });
  },
  inputHandler(e) {
    console.log(e);
    console.log(e.detail.value);
  },
  inputHandler2(e) {
    this.setData({
      msg: e.detail.value,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
