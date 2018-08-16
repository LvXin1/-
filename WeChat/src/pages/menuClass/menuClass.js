// src/pages/menuClass/menuClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuClassLists: ["家常菜", "湘菜", "粤菜", "家常菜", "湘菜", "粤菜"],
    isChecked: [false, false, false, false, false,false],
    subMenu:[],
    selectMenuName:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://apis.juhe.cn/cook/category', //仅为示例，并非真实的接口地址
      data: {
        key:"c76457cbc3bde0b6ccd74dbffd8cee19",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          menuClassLists:res.data.result
        })
        var arr = [];
        res.data.result.forEach(row => {
          arr.push(false);
        })
        arr[0] = true;
        _this.setData({
          isChecked: arr
        })
        _this.setData({
          subMenu: res.data.result[0].list
        })
        _this.setData({
          selectMenuName: res.data.result[0].name
        })
      }
    })
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
  
  },
  bindTap(e){
    var arr = [];
    this.data.isChecked.forEach((row,index) => {
      if (index != e.currentTarget.dataset.index){arr.push(false);} 
      else{arr.push(true)}
    })
    this.setData({
      isChecked:arr
    })
    this.setData({
      selectMenuName: this.data.menuClassLists[e.currentTarget.dataset.index].name
    })
    this.setData({
      subMenu: this.data.menuClassLists[e.currentTarget.dataset.index].list
    })
  },
  findMenu(e){
    wx.navigateTo({
      url: '../search/search?id=' + e.currentTarget.dataset.id
    })
  }
})