// pages/index/categoryList/category.js
var loadMoreView, page
Page({
  properties: {
    // 判断是否还有更多数据
    hasMore: {
      type: Boolean,
      value: false
    },
    // 加载中的显示文本
    loadingText: {
      type: String,
      value: '加载中...'
    },
    // 加载失败的显示文本
    failText: {
      type: String,
      value: '加载失败, 请点击重试!'
    },
    // 没有更多后的显示文本, 默认没有则隐藏加载更多控件
    finishText: {
      type: String,
      value: ''
    },
    // 列表渲染延时, 默认为 500 ms, 我在开发工具中测试列表渲染速度时快时慢, 可根据实际使用中界面复杂度自行调整
    // ps 如果能监听setData() 渲染结束的话则可以不需要延时 
    listRenderingDelay: {
      type: Number,
      value: 500
    }
  },
  /**
   * 页面的初始数据
   */
  data: {

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
    console.log("地步了");
    this.loadMore();
   this.requestSeriesID();
  },

  requestSeriesID: function (options){
    let that = this;

  let data={
    'series_id': this.data.series_id,
    'page': this.data.page,
    'pageNum': this.data.pageNum
  };
    this.loadMore();

    wx.request({
      url: 'http://localhost/PHP/shopList.php',
      data: data,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        
        if( res.data.ret==0){
      that.setData({
        page:++that.data.page,
        shop_list: that.data.shop_list.concat(res.data.data.shop_list),
      });
      }else{
          that.loadMoreFail();
      }
        that.loadMoreComplete();
      },
      fail: function(res) {
        that.loadMoreFail();

      },
      complete: function(res) {
        that.loadMoreComplete();

      },
    });
  },

    //加载更多的入口方法, 直接在page中使用时请在onReachBottom() 方法中调用这个方法, 并实现loadMoreListener方法去获取数据
    loadMore: function () {
      console.log("加载更多");

      this.setData({
        isLoading: true
      })
      this.triggerEvent('loadMoreListener')
    },
    //加载完成, 传入hasMore 
    loadMoreComplete: function (data) {
    
      //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
      setTimeout(function () {
        this.setData({
          isLoading: false
        })
      }.bind(this), this.properties.listRenderingDelay)
    },
    // 加载失败
    loadMoreFail: function () {
      this.setData({
        showIcon: false,
        text: this.properties.failText
      })
    },
    //点击 loadmore 控件时触发, 只有加载失败时才会进入页面回调方法
    clickLoadMore: function () {
      if (this.data.text != this.properties.failText) return
      this.setData({
        showIcon: true,
        text: this.properties.loadingText,
        isLoading: true
      })
      this.triggerEvent('clickLoadMore')
    },


})
