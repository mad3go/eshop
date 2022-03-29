const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
  },
  onLoad: function () { 
    console.log('about onload')
  },
  pageBack() {
    wx.navigateTo({
      url: '/pages/index/index',
    });
  },
  onShareAppMessage() {

  },
});
