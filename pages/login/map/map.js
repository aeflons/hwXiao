// pages/login/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 家具城',
      // label:{
      //   content:"家具城",
      //   color: "#ffffff",
      // }, 
      callout:{
        content: "家具城",
        color: "#999999",
      }
    }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getCenterLocation: function () {
    wx: wx.openLocation({
      latitude: this.data.markers[0].latitude,
      longitude: this.data.markers[0].longitude,
      scale: 18,
      name: this.data.markers[0].name,
      address: this.data.markers[0].name,
      success: function (res) {

      },
      fail: function (res) { },
      complete: function (res) { },
    });
  },
})