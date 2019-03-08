// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getStorage({
      key: 'join_content',
      success: function(res) {
        console.log(res.data);
        self.setData({
          title: res.data
        })

      },
  
    })
    // var self = this;
    // var id = options.id;
    // self.setData({
    //   title: id
    // })
    // wx.request({
    //   url: 'http://www.xiao_1.com/Mobile/Ajax/getDetail.html',
    //   data: { 'id': id},
    //   success(res){
    //     console.log(res);
    //   }
    // })



    this.setData({
      id: options.id
    });
   
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

  }
})