import { request } from "../../request/index";

// pages/takeout/takeout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scores:4.8,
    leftTime:40,
    takeoutType:"支持自取",
    takeoutCost:2,
    //左侧菜单书籍
    leftMenuList:[],
    rightContent:[]
  },
  //接口的返回数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },
  //获取分类数据
  getCates(){
    request({
      url:"https://api.zbztb.cn/api/public/v1/home/swiperdata"
    })
    .then(res =>{
      //console.log(res);
      this.Cates=res.data.message;
      //构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v=>v.cates_name);
      //构造右侧商品数据
      let rightContent = this.cates[0].children 
      this.setData({
        leftMenuList,
        rightContent
      })
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