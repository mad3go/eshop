import { request } from "../../request/index";

// pages/order/order.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                name: "全部",
                isActive: true
            },
            {
                id: 1,
                name: "待付款",
                isActive: false
            },
            {
                id: 2,
                name: "待收取",
                isActive: false
            },
            {
                id: 3,
                name: "已付款",
                isActive: false
            }
        ],
        orderList: []
    },
    //自定义事件，用来接收子组件传递过来的数据
    handleItemChange(e) {
        //接受子组件传递过来的参数
        const { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData({
            tabs
        })
    }
})