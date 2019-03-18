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
      [{"id":"1",
        "img": '/images/pro_01.jpg',
        "title": '精英贷0',
        "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
      }, {
          "id": "1",
          "img": '/images/pro_01.jpg',
          "title": '精英贷1',
          "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
        },
        {
          "id": "1",
          "img": '/images/pro_01.jpg',
          "title": '精英贷2',
          "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
        },
        {
          "id": "1",
          "img": '/images/pro_01.jpg',
          "title": '精英贷2',
          "cont": "22周岁即可\n最快3小时下款\n件均8万，最高20万"
        }
      ]
    ,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    listSeries: [{
      icon: '../../images/优惠券.png',
      text: "待付款",
      url: "",
    }, {
      icon: '../../images/优惠券.png',
      text: "待发货",
      url: "",
    }, {
      icon: '../../images/优惠券.png',
      text: "待收货",
      url: "",
    }, {
      icon: '../../images/优惠券.png',
      text: "待评价",
      url: "",
    }, {
      icon: '../../images/优惠券.png',
      text: "退换/售后",
      url: "",
    },
      {
        icon: '../../images/优惠券.png',
        text: "待付款",
        url: "",
      }, {
        icon: '../../images/优惠券.png',
        text: "待发货",
        url: "",
      }, {
        icon: '../../images/优惠券.png',
        text: "待收货",
        url: "",
      }, {
        icon: '../../images/优惠券.png',
        text: "待评价",
        url: "",
      }, {
        icon: '../../images/优惠券.png',
        text: "退换/售后",
        url: "",
      }, {
        icon: '../../images/优惠券.png',
        text: "待评价",
        url: "",
      }, {
        icon: '../../images/优惠券.png',
        text: "退换/售后",
        url: "",
      }],
// 店长推荐
    shop_comment:
      [{
        "id": "2",
        "name": "大富豪客厅",
        "specifacal": "细腻",
        "introduce": "非洲黄花梨",
        "image": "http://localhost/image/banner_01.jpg",
        "series_id": "5"
      }
      ]
    ,
    new_comment:
      [{
        "id": "2",
        "name": "大富豪客厅",
        "specifacal": "细腻",
        "introduce": "非洲黄花梨",
        "image": "http://localhost/image/banner_01.jpg",
        "series_id": "5"
      }]
    ,

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   this.requestIndex();
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   };
  //   this.getInitData();
  // },
  // getInitData:function() {
  //   var that = this;
  //   wx.request({
  //     url: 'http://www.xiao_1.com/Mobile/Ajax/wxIndex.html',
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success(res) {
  //       if (res.data.data.length > 0) {
  //         that.setData({
  //           userInfo:res.data.data
  //         })
  //       }
  //     }
  //   })
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  },
  jumpNewPage:function(e){
    console.log(e);

    var id = e.target.dataset.id
    console.log(id);
    wx.navigateTo({
      url: "categoryList/shopDetail/shopDetail?id=2",
    })
  },
  askPage:function(e){
    console.log(e)
  },


 requestIndex:function(){
   var that = this;
   wx.request({
     url: 'http://localhost/PHP/index.php',
     data: '',
     header: {},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: function(res) {
       console.log(res);
      that.setData({
        new_comment: res.data.data.new_comment,
        shop_comment: res.data.data.shop_comment,
      });
     },
     fail: function(res) {},
     complete: function(res) {},
   })
 },
  seriesList:function(e){
    var id = e.target.dataset.id
    wx.navigateTo({
      url: "categoryList/category?series_id="+id,
    })
  }
 
})
