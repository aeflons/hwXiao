// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        "title": '关于我们', 'content': " 2月21日，在位于内蒙古鄂尔多斯市东胜区的京东方鄂尔多斯AM－OLED显示器项目中，工作人员在展示运用了透明显示技术的智能冰箱。 新华社记者 彭源 摄 2月23日，在内蒙古包头市江馨微电机公司的生产线中，工作人员在展示微电机成品。新华社记者 彭源 摄"
      },
      {
        "title": '商务合作', 'content': " 2月22日，在位于内蒙古鄂尔多斯市东胜区的京东方鄂尔多斯AM－OLED显示器项目中，工作人员在展示运用了透明显示技术的智能冰箱。 新华社记者 彭源 摄 2月23日，在内蒙古包头市江馨微电机公司的生产线中，工作人员在展示微电机成品。新华社记者 彭源 摄"
      },
      {
        "title": '联系方式', 'content': " 2月23日，在位于内蒙古鄂尔多斯市东胜区的京东方鄂尔多斯AM－OLED显示器项目中，工作人员在展示运用了透明显示技术的智能冰箱。 新华社记者 彭源 摄 2月23日，在内蒙古包头市江馨微电机公司的生产线中，工作人员在展示微电机成品。新华社记者 彭源 摄"
      },
  ]},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  

  jumpDetail:function(e){
    var content = e.currentTarget.dataset.content;
    wx.setStorage({
      key: 'join_content',
      data: content,
    })
    wx.navigateTo({
      url: '/pages/detail/detail?id',
    })
  
  },
  getUserInfo:function(e){
    console.log(2);
      wx.getUserInfo({
        success(e){
            console.log(e);
        }
      })  
  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '15179811531' // 仅为示例，并非真实的电话号码
    })
  }
})