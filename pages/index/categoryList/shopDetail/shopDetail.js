// pages/index/categoryList/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_image:"../../../../images/2102.jpg",
    product_introduce:"22周岁即可\n最快3小时下款\n件均8万，最高20万",
    product_specif:"22周岁即可\n最快3小时下款\n件均8万，最高20万",
    userData:{
      name:"",
      password:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.id);
    if (options.id){
      this.requestDetail(options.id);
    }
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
  /**
   * 获取详情
   */
  requestDetail:function(e){
    var that = this;
    console.log('123');
      wx.request({
      url: 'http://localhost/PHP/login.php?id='+ e,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.info.username);
        that.setData({
          userData: res.data.info,
        })
        
      },
      fail: function(res) {
        console.log(res);

      },
      complete: function(res) {
        console.log(res);

      },
    })
  },
})