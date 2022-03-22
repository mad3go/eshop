//var timestamp = require('../../utils/timestamp.js') //引入进行格式化时间
//先将时间转换成时间戳
//var stamp = timestamp.getDateTimeStamp(teacherAppraiseTime)
//然后将时间戳转成几个小时、几分钟等格式
//var time = timestamp.getDateDiff(stamp);

//import { request } from "../../request/index"

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    antiepd_info_list:[{
      img:'../../icon/sucai.jpeg', title:'截至21日8时，上海累计排查管控3853人核酸检测均阴性', source:'绿政公署', time:50+'分钟前' ,unique:'page1'
    },{
      img:'../../icon/roupian.jpeg', title:'国家卫健委：昨日新增本土确诊93例、本土无症状30例', source:'绿政公署', time:50+'分钟前' ,unique:'page2'
    },{
      img:'../../icon/roupian.jpeg', title:'武汉新增10例阳性感染者，均与培训班相关', source:'绿政公署', time:50+'分钟前' ,unique:'page3'
    }],
    cateList:[{

    }],
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
