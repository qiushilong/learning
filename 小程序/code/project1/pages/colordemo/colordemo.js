// pages/colordemo/colordemo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    loading: false,
  },
  getColors() {
    wx.showLoading({
      title: "数据加载中...",
    });
    this.setData({
      loading: true,
    });
    wx.request({
      url: "https://escook.cn/api/color",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.setData({
          colorList: [...this.data.colorList, ...res.data.data],
        });
      },
      complete: () => {
        wx.hideLoading();
        this.setData({
          loading: false,
        });
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColors();
  },

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
  onReachBottom() {
    !this.data.loading && this.getColors();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
