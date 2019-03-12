// pages/login/generalize/generalize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appid:"",
    secret:"",
    imagePath: "../../../images/banner_02.jpg",
    imageWidth: '',
    imageHeight: '',
    userIcon:"",
    userName:"john",
    generalizText:"向 / 您 / 推 / 荐",


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

  requestAccessToken:function () {
    wx:wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=&secret=APPSECRET',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

   onReady: function () {
    let _this = this,
      deviceWidth = 0,
      deviceHeigth = 0;

    //获取设备宽度，用于求所需画在画布上的图片的高度
    wx.getSystemInfo({
      success: function (res) {
        deviceWidth = res.windowWidth;   //获取设备宽度
        deviceHeigth = res.windowHeight;
        wx.getImageInfo({    //获取图片信息
          src: _this.data.imagePath,
          success: function (res) {
            let imageWidth = deviceWidth,
              imageHeight = res.width / deviceWidth *  res.height;  //求所需画在画布上的图片的高度
            _this.setData({
              'imageWidth': imageWidth,
              'imageHeight': imageHeight
            });
            let iconX = 60,iconY = 60, iconW = 30, iconH = 30;
            const ctx = wx.createCanvasContext('gameCanvas');  //创建画布对象  
            ctx.drawImage("../../../images/分享.png",0,0,imageWidth,imageHeight);
            ctx.setFontSize(16);      //设置字体大小
            ctx.setFillStyle('#0099FF');   //设置字体颜色
            ctx.fillText(_this.data.userName, iconX + iconW  + 30 / 2, iconY + iconH - 40);  //设置字体内容、坐标
            ctx.setFontSize(20);
            ctx.fillText(_this.data.generalizText, iconX + iconW  + 30 / 2, iconY + iconH -14);  //设置字体内容、坐标
            ctx.save();
            ctx.beginPath();
            ctx.arc(60, 60, 30, 30, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(_this.data.imagePath, 30, 30,60,60);  //添加图片
            ctx.restore() //恢复之前保存的绘图上下文
            ctx.draw();     //开始绘画
          }
        })
      }
    });
  },
  createImage: function () {
    let imageWidth = this.data.imageWidth,
      imageHeight = this.data.imageHeight;

    wx.canvasToTempFilePath({     //将canvas生成图片
      canvasId: 'gameCanvas',
      x: 0,
      y: 0,
      width: imageWidth,
      height: imageHeight,
      destWidth: imageWidth,     //截取canvas的宽度
      destHeight: imageHeight,   //截取canvas的高度
      success: function (res) {
        wx.saveImageToPhotosAlbum({  //保存图片到相册
          filePath: res.tempFilePath,
          success: function () {
            wx.showToast({
              title: "生成图片成功！",
              duration: 2000
            })
          }
        })
      }
    })
  }
})