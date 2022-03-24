// components/homeTabs/homeTabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    homeTabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      const {index} = e.currentTarget.dataset; //获取索引
      this.triggerEvent("itemChange",{index}); //触发父组件的自定义事件
   }
  }
})
