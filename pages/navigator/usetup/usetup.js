import { request } from "../../../request/index";

// pages/navigator/usetup/usetup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setupBtnState:true,
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
            setupBtnState:false
          })
        }
    }
    else{
      this.setData({
        setupBtnState:true
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
          setupBtnState:false
        })
      }
      else{
        this.setData({
          setupBtnState:true
        })
      }
  }
  },
  setup(){
    var username = this.data.username;
    var password = this.data.password;
    request({
      url:'/register/user',
      method:"post",
      data:{
        account:username,
        password:password
      },
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
    },
    })
    .then(res=>{
      console.log(res);
      //console.log('注册成功');
    })
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