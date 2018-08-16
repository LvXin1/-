// src/pages/goods/goods_01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    scrolltop: null, //滚动位置
    page:0,
    ingredients: [], //服务集市列表,
    title:'',
    intro:'',
    steps:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var _this = this;
    wx.request({
      url: 'http://apis.juhe.cn/cook/queryid', //仅为示例，并非真实的接口地址
      data: {
        id: options.id,
        key: "c76457cbc3bde0b6ccd74dbffd8cee19",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.resultcode == 200) {
          _this.setData({
            imgUrls: res.data.result.data[0].albums
          })
          _this.setData({
            title: res.data.result.data[0].title
          })
          _this.setData({
            intro: res.data.result.data[0].imtro
          })
          _this.setData({
            steps: res.data.result.data[0].steps
          })
          var arr1 = res.data.result.data[0].ingredients.split(";");
          var arr2 = [];
          for(var i=0;i<arr1.length;i++){
            arr2.push([arr1[i].split(",")[0], arr1[i].split(",")[1]]);
          }
          _this.setData({
            ingredients: arr2
          })
        }
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
   fetchTestData: function () {  //获取城市列表
    let _this = this;
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading'
    // })
    
    const perpage = 25;
    this.setData({
      page: this.data.page + 1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page - 1) * perpage; i < page * perpage; i++) {
      newlist.push({
        "id": i + 1,
        "name": "微信小程序下拉刷新上拉加载" + (i + 1)
      })
    }
    setTimeout(() => {
      _this.setData({
        testdata: _this.data.testdata.concat(newlist)
      })
    }, 1500)
  },
   scrollHandle: function (e) { //滚动事件
     this.setData({
       scrolltop: e.detail.scrollTop
     })
   },
   onPullDownRefresh: function () { //下拉刷新
     this.setData({
       page: 0,
       testdata: []
     })
     this.fetchTestData();
     setTimeout(() => {
       wx.stopPullDownRefresh()
     }, 1000)
     console.log(4444)
   },
   goToTop: function () { //回到顶部
     this.setData({
       scrolltop: 0
     })
     console.log(111111)
   },
   scrollLoading: function () { //滚动加载
     this.fetchTestData();
   }
})