//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index_swiper: [
      { "img": "http://puui.qpic.cn/tv/0/58820795/0"},
      { "img": "http://puui.qpic.cn/tv/0/59746878/0"},
      { "img": "http://puui.qpic.cn/tv/0/58820795/0"},
    ],
    userInfo:
      [{
        "img": '/images/pro_01.jpg',
        "title": '精英贷0',
        "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
      }, {
          "img": '/images/pro_01.jpg',
          "title": '精英贷1',
          "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
        },
        {
          "img": '/images/pro_01.jpg',
          "title": '精英贷2',
          "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
        },
        {
          "img": '/images/pro_01.jpg',
          "title": '精英贷2',
          "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
        }
      ]
    ,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // };
    // this.getInitData();
  },
  getInitData:function() {
    var that = this;
    wx.request({
      url: 'http://www.xiao_1.com/Mobile/Ajax/wxIndex.html',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.data.length > 0) {
          that.setData({
            userInfo:res.data.data
          })
        }
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jumpNewPage:function(e){

    var id = e.target.dataset.id
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + id,
    })
  },
  askPage:function(e){
    console.log(e)
  },
 
})
