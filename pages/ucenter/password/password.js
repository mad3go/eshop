// pages/profile/profile.js
Page({
  data: {
    isLogined: false,     // 是否已经登录

    oldPawword: '',
    newPassword: '',
    newPassword2: ''
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

  oldPasswordHandle(e){
    this.setData({oldPawword: e.detail.value})
  },

  newPasswordHandle(e){
    this.setData({newPawword: e.detail.value})
  },

  newPassword2Handle(e){
    this.setData({newPawword2: e.detail.value})
  },
  
  editPassword(){
    console.log('修改密码')
    console.log(this.data.oldPawword)
    console.log(this.data.newPawword)
    console.log(this.data.newPawword2)

    wx.showModal({
      content: '修改成功!',
      showCancel: false,
      title: '提示',
    })
  }

})