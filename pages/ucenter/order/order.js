// pages/profile/profile.js
Page({
  data: {
    tabList: ['全部订单', '待付款', '待收取', '已完成'],
    loaded: false,
    orderList: [
      {
        'time': '2022-03-28',
        'stateTip': '待付款',
        'goodsList': [
          {
            "image": 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg',
            'title': '订单商品标题',
            'attr': '属性',
            'price': 100,
            'number': 1
          },
          {
            "image": 'https://img0.baidu.com/it/u=814073652,3111339323&fm=253&fmt=auto&app=138&f=JPEG?w=709&h=500',
            'title': '订单商品标题',
            'attr': '属性',
            'price': 200,
            'number': 1
          },
          {
            "image": 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg',
            'title': '订单商品标题',
            'attr': '属性',
            'price': 500,
            'number': 1
          }
        ],
        'title': '订单商品标题',
        'price': 1000,
      }
    ]
  },

  tabSelect(e){
    let status = e.currentTarget.dataset.id
    if (status === 0) {
      console.log('显示全部订单')
    } else if (status === 1) {
      console.log('显示待付款订单')
    } else if (status === 2) {
      console.log('显示待收取订单')
    } else if (status === 3) {
      console.log('显示已完成订单')
    }
  },

  cancelOrder(e){
    console.log('取消订单')
    console.log(e)
  },

  payOrder(e){
    console.log('支付订单')
    console.log(e)
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