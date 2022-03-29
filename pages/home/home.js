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
    wangpu:[{
      id:0, img:'../../icon/sucai.jpeg', name:'哆鹿生鲜', rateGoals:'4.5', distances:'3.5', time:'30', tag:['米面粮油','果蔬生菜','生活用品']
    },{
      id:1, img:'../../icon/roupian.jpeg', name:'什么什么', rateGoals:'4.0', distances:'7.5', time:'90', tag:['米面粮油','果蔬生菜']
    },{
      id:2, img:'../../icon/roupian.jpeg', name:'七七八八', rateGoals:'4.6', distances:'9.5', time:'50', tag:['生活用品']
    }],
    antiepd_info_list:[{
      img:'../../icon/sucai.jpeg', title:'截至21日8时，上海累计排查管控3853人核酸检测均阴性', source:'绿政公署', time:50+'分钟前' ,unique:'page1'
    },{
      img:'../../icon/roupian.jpeg', title:'国家卫健委：昨日新增本土确诊93例、本土无症状30例', source:'绿政公署', time:50+'分钟前' ,unique:'page2'
    },{
      img:'../../icon/roupian.jpeg', title:'武汉新增10例阳性感染者，均与培训班相关', source:'绿政公署', time:50+'分钟前' ,unique:'page3'
    }],
    cateList:[{

    }],
    homeTabs:[
      {
        id:0,
        name:"米面粮油",
        isActive:true
      },
      {
        id:1,
        name:"果蔬生鲜",
        isActive:false
      },
      {
        id:2,
        name:"生活用品",
        isActive:false
      },
      {
        id:3,
        name:"医护用品",
        isActive:false
      }
    ]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
   handleItemChange(e) {
    //接受子组件传递过来的参数
    const {index} = e.detail;
    let {homeTabs} = this.data;
    tabs.forEach((v,i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      homeTabs
    })
  },
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
