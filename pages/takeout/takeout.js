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
    price:20,
    currentIndex:0,
    clicknums:0,
    scrollTop:0,
    //左侧菜单书籍
    leftMenuList:[],
    rightContent:[],
    goodsnums:[]
  },
  QueryParams:{
    categoryName:'',
    currPage:1,
    size:10
  },
  //接口的返回数据
  Cates:[],
  Items:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },
  //获取分类数据
  getCates(){
    request({
      url:"/category/queryAll"
    })
    .then(res =>{
      this.Cates=res.data.data.page.records;
      
      //构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v=>v.name);
      this.setData({
        leftMenuList
        //rightContent
      })
    })
  },
  //获取点击eftMenuList分类Cates时数据并返回给后端

  //
  handleItemChange(e){
    const {index} = e.currentTarget.dataset;
    let name = this.Cates[index].name;
    request({
      url:"/category/queryProductByCategoryName",
      data:{
        categoryName: name
      }
    })
    .then(res =>{
      this.Items = res.data.data.category_products.records;
      //console.log(this.Items);
      let rightContent = this.Items.map(v=>v.categoryName);
       this.setData({
         rightContent,
         currentIndex:index,
         scrollTop:0
       })
    })
  },
  addGood(e){
    var that = this;
    this.clicknums += 1;
    console.log(this.clicknums);
    this.setData({
     
    })
  },
  goToPay(e){
    wx.navigateTo({
      url: '../navigator/payment/payment',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  //页面上滑 滚动条触底事件
  onReachBottom(){
    console.log("页面触底");
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