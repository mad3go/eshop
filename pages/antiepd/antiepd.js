// pages/antiepd/antiepd.js
import { request } from "../../request/index"; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[
      {
        id:0, image:'../../icon/k1.jpeg'
    },{
      id:1, image:'../../icon/k2.jpeg'
    },{
      id:2, image:'../../icon/k3.jpeg'
    }],
    tabs:[
      {
        id:0,
        name:"最新报道",
        isActive:true
      },{
        id:1,
        name:"肺炎知识",
        isActive:false
      }
    ],
    antiepd_info_list:[{
      img:'../../icon/sucai.jpeg', title:'截至21日8时，上海累计排查管控3853人核酸检测均阴性', source:'央视新闻', time:50+'分钟前' ,unique:'page1'
    },{
      img:'../../icon/roupian.jpeg', title:'国家卫健委：昨日新增本土确诊93例、本土无症状30例', source:'绿政公署', time:50+'分钟前' ,unique:'page2'
    },{
      img:'../../icon/roupian.jpeg', title:'武汉新增10例阳性感染者，均与培训班相关', source:'真理部', time:50+'分钟前' ,unique:'page3'
    }],
    covid_increase:[{
      inner:4, city:[{
        cname:"上海", nums:"3"
      },{
        cname:"辽宁", nums:"1"
      }]
    },{
      outer:9, input:9, nowNums:2903
    },{
    }],
    swiperCurrent:0
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
  },
  handleItemChange(e) {
    //接受子组件传递过来的参数
    const {index} = e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
  handleSwiperChange(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
})