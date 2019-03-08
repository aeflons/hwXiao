// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      icon:"../../images/banner_02.jpg",
      name:"john",
      role:"vip",
    },
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [{
      icon: '../../images/余额.png',
      text: '我的余额',
      
    }, {
        icon: '../../images/优惠券.png',
      text: '我的优惠券',
    }, {
        icon: '../../images/积分.png',
        text: '我的积分'
    }, {
        icon: '../../images/收藏.png',
        text: '我的收藏'
    }, {
        icon: '../../images/评论.png',
      text: '我的评论'
      },{
        icon: '../../images/代理.png',
        text: '我的代理'
      },{
        icon: '../../images/佣金.png',
        text: '我的佣金'
      },{
        icon: '../../images/推广码.png',
        text: '我的推广码'
      }],

      listStatus:[{
        icon:'../../images/优惠券.png',
          text:"待付款"
      },{
          icon: '../../images/优惠券.png',
          text: "待发货"
      },{
          icon: '../../images/优惠券.png',
        text: "待收货"
      },{
          icon: '../../images/优惠券.png',
        text: "待评价"
      },{
          icon: '../../images/优惠券.png',
        text: "退换/售后"
      }]
  },
   jumpSetting:function(){

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

  }
})