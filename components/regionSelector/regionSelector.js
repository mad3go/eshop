// components/regionSelector/regionSelector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    region:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // region: ['广东省', '广州市', '海珠区'],
    // customItem: '全部'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }
  }
})
