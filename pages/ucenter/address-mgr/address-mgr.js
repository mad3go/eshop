// pages/profile/profile.js
Page({
  data: {
    isLogined: false,     // 是否已经登录
    
    addressData: {
      name: '刘晓晓',
      mobile: '18666666666',
      addressName: '贵族皇仕牛排(东城店)',
      address: '北京市东城区',
      area: 'B区',
      default: true
    }
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

  
  addAddressData(e){
    console.log('添加收货地址数据')
    wx.showModal({
      content: '操作成功!',
      showCancel: false,
      title: '提示',
    })
  }

})