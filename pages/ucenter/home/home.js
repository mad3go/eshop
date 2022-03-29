// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogined: false,     // 是否已经登录
    
    // 用户信息存储
    wechatUserInfo: {
      nickName: '微信网名',
      avatarUrl: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload出发')
    // wx.login({
    //   success: (res) => {
    //     if (res.code) {
    //       console.log('成功获取到了code,内容:' + JSON.stringify(res))
    //     }
    //   }
    // })
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
  
  clearCacheData(){
    console.log('清除缓存')
    wx.showModal({
      content: '清除缓存完成!',
      showCancel: false,
      title: '提示',
    })
  },

  // 点击登录按钮的逻辑
  login(){
    console.log("login()执行")
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 获取成功了
        console.log(res)
        
        this.setData({"wechatUserInfo":res.userInfo})  // 设置用户信息
        this.setData({"isLogined": true})              // 设置已经登录状态
        
        console.log(this.data.wechatUserInfo)
      },
      fail: (res) => {
        console.log(res)
      },
    })
  }
})