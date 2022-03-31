// pages/profile/profile.js
Page({
  data: {
    isLogined: false,     // 是否已经登录
    
    addressList: [
      {
        name: '刘晓晓',
        mobile: '18666666666',
        addressName: '贵族皇仕牛排(东城店)',
        address: '北京市东城区',
        area: 'B区',
        default: true
      },{
        name: '刘大大',
        mobile: '18667766666',
        addressName: '龙回1区12号楼',
        address: '山东省济南市历城区',
        area: '西单元302',
        default: false,
      }
    ],
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

  
  editAddress(e) {
    console.log('修改地址')
    let data = e.currentTarget.dataset.item
    console.log(data)
    wx.navigateTo({
      url: '/pages/ucenter/address-mgr/address-mgr',
    });
  },

  addAddress(){
    console.log('添加地址')
    wx.navigateTo({
      url: '/pages/ucenter/address-mgr/address-mgr',
    });
  },

})