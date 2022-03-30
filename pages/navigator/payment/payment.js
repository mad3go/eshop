// pages/navigator/payment/payment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {},
        cart: [{
                id: 1,
                goods_name: "猪颈肉",
                goos_price: 39.9,
                num: 1,
                img: "https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg"
            },
            {
                id: 2,
                goods_name: "医用口罩",
                goods_price: 30,
                num: 2,
                img: "https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    onShow() {
        // 1 获取缓存中的收货地址信息
        const address = wx.getStorageSync("address");
        this.setData({ address });
    },
    handleChooseAddress() {
        wx.chooseAddress({
            success: (result) => {
                console.log(result);
                // 把获取到的地址拼接在一起
                result.all = result.provinceName + result.cityName + result.countyName + result.detailInfo;
                // 把获取到的收获地址 存入到本地存储中
                wx.setStorageSync("address", result);
                this.setData({
                    address: result
                })
            },
            fail: () => {},
            complete: () => {}
        });

    }
})