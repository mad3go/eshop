import { request } from "../../request/index";

// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"全部",
        isActive:true
      },
      {
        id:1,
        name:"待付款",
        isActive:false
      },
      {
        id:2,
        name:"待收取",
        isActive:false
      },
      {
        id:3,
        name:"已付款",
        isActive:false
      }
    ],
    orderList:[]
  },
//自定义事件，用来接收子组件传递过来的数据
  handleItemChange(e) {
    //接受子组件传递过来的参数
    const {index} = e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
  // getList(){
  //   request({
  //     url:"http://1.12.233.114:8099/category/queryProductByCategoryName"
  //   })
  //   .then(res=>{
  //     console.log(res);
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getList();
    const token = wx.getStorageSync("token");
    //console.log(token);
    request({
      url:'/order/queryByUserToken',
      header:{
        "token":token
      }
    })
    .then(res=>{
      console.log(res);
    })
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

  }
})