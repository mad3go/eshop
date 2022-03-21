// pages/antiepd/antiepd.js
import { request } from "../../request/index"; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 5000,
    duration: 500,  //有接口后这三个参数删掉
    //轮播图数组
    swiperList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList;
  },
    getSwiperList(){
      request({url:""})
      .then(result => {
        this.setData({
          swiperList:result.data.message
        })
      })
    }
})