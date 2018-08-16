// src/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bannerUrl":[
      "../../../images/index/banner3.jpg",
      "../../../images/index/banner2.jpg",
      "../../../images/index/banner5.jpg"
    ]
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
  
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    // 显示导航栏loading
    wx.showNavigationBarLoading();
    // 调用接口加载数据
    setTimeout(function(){
        // 隐藏导航栏loading
        wx.hideNavigationBarLoading();
        // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新
        wx.stopPullDownRefresh();
    },1000)
  },
  // 上拉加载
  onReachBottom(e) {
    // let that = this;
    // if (that.data.hasMore) {
    //   that.setData({
    //     pageNum: that.data.pageNum + 1,  // 每次触发上拉事件，把pageNum+1
    //     isFirstLoad: false                // 触发到上拉事件，把isFirstLoad设为为false
    //   });

    //   that.loadData();
    // }
    setTimeout(function(){
        console.log(11)
    },1000)
  },
  menuClass(e){
    wx.navigateTo({
      url: '../menuClass/menuClass'
    })
  },
  searchMenu(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  findMenu(e){
    wx.navigateTo({
      url: '../search/search?name=' + e.currentTarget.dataset.name
    })
  }

})
