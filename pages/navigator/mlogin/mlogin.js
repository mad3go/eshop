import { request } from "../../../request/index";
//商家登录
// pages/navigator/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginBtnState:true,
    username:'',
    password:''
  },
  usernameInput(e){
    var val = e.detail.value;
    if(val!=''){
        this.setData({
          username:val
        })
        if(this.data.password!=''){
          this.setData({
            loginBtnState:false
          })
        }
    }
    else{
      this.setData({
        loginBtnState:true
      })
    }
  },
  passwordInput(e){
    var val = e.detail.value;
    if(val!=''){
      this.setData({
        password:val
      })
      if(this.data.password!=''){
        this.setData({
          loginBtnState:false
        })
      }
      else{
        this.setData({
          loginBtnState:true
        })
      }
  }
  },
  login(){
    var userInfs = wx.getStorageSync('userobj') || [];
    var username = this.data.username;
    var password = this.data.password;
    // 至少为空数组而不会变成undefined
    //item表示数组userInfs里的每一个元素
    request({
      url:'/login/businessman',
      data:{
        account:username,
        password:password
      }
    })
    .then(res => {
        wx.showToast({
          title:'登录成功',
          duration:2000
        })
        var token = res.data.data.token;
        console.log(token);
        var userId = res.data.data.userId;
        wx.setStorageSync("token", token); //缓存token
        wx.setStorageSync("userId",userId);//缓存userId
        wx.switchTab({
          url: '/pages/home/home'
        });
        console.log(res);
        this.setData({
          username:username
        })
    })
    // var userInf = userInfs.find(item=>{
    //   item.username == this.data.username;
    // })
    // if(userInfs){
    //   if(userInfs.password == this.data.password){
    //     wx.showToast({
    //       title: '登录成功',
    //       duration: 1500,
    //       success: (result)=>{
    //         wx.navigateTo({
    //           url: '../../pages/home/home',
    //         })
    //       }
    //     })
    //   }
    //   else{
    //     wx.showToast({
    //       title:'用户名不存在',
    //       duration:2000
    //     })
    //   }
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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