// pages/index/categoryList/category.js
var loadMoreView, page
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    hasMore:true,
    showThis: false,
    text: '',
    showIcon: false,
    isLoading: false,
      winHeight: "",//窗口高度
      currentTab: 0, //预设当前项的值
      scrollLeft: 0, //tab标题的滚动条位置
      expertList: [{ //假数据
        img: "../../../images/2102.jpg",
        name: "欢顔",
        tag: "知名情感博主",
        answer: 134,
        listen: 2234
      }],
    "page":"0",
    "total_num": "7",
    "pageNum": 10,
    "series_id":1,
    "shop_list": [
      {
        "id": "1",
        "name": "大富豪客厅",
        "specifacal": "细腻",
        "introduce": "非洲黄花梨",
        "image": "http://localhost/image/banner_01.jpg",
        "series_id": "4",
        "type": "1"
      },
      ]
    },
    // 滚动切换标签样式
    switchTab: function (e) {
      console.log(e);
      this.setData({
        currentTab: e.detail.current
      });
      this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav: function (e) {
      var cur = e.target.dataset.current;
      if (this.data.currentTaB == cur) { return false; }
      else {
        this.setData({
          currentTab: cur
        })
      }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor: function () {
      if (this.data.currentTab > 4) {
        this.setData({
          scrollLeft: 300
        })
      } else {
        this.setData({
          scrollLeft: 0
        })
      }
    },
  onLoad: function (options) {
    if (options.id) {
      this.setData({
        series_id:options.id,
      })
    }
    this.requestSeriesID(options);

  },
  
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  // },

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
    console.log("已经到订");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {


// this.requestSeriesID;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onScrollViewReachBottom:function(){
   this.requestSeriesID();
  },

  requestSeriesID: function (options){
    let that = this;

  let data={
    'series_id': this.data.series_id,
    'page': this.data.page,
    'pageNum': this.data.pageNum
  };
    wx.request({
      url: 'http://localhost/PHP/shopList.php',
      data: data,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        
        if( res.data.ret==0){
          var newlist = that.data.shop_list.concat(res.data.data.shop_list);
          var count = newlist.length;
          var has = (that.data.page + 1) * that.data.pageNum < count;

      that.setData({
        page:++that.data.page,
        shop_list: newlist,
        hasMore:has,
      });
          
     
      }else{
      }
      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    });
  },

   

  gotoDetail:function(e){
    console.log(e);
    var id = e.currentTarget.dataset.id
    console.log(id);
    wx.navigateTo({
      url: "shopDetail/shopDetail?id=" + id,
    })
  }
})
