// src/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuNameLists:[],
    searchShow:true,
    menuLists:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    if(options.id){
      this.setData({
        searchShow:false
      })
      wx.request({
        url: 'http://apis.juhe.cn/cook/index', //仅为示例，并非真实的接口地址
        data: {
          cid: options.id,
          key: "c76457cbc3bde0b6ccd74dbffd8cee19",
          rn: "15",
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.resultcode == 200) {
            _this.setData({
              menuLists: res.data.result.data
            })
          }
        }
      }) 
    }else if(options.name){
      this.setData({
        searchShow: false
      })
      wx.request({
      url: 'http://apis.juhe.cn/cook/query.php', //仅为示例，并非真实的接口地址
      data: {
        menu: options.name,
        key:"c76457cbc3bde0b6ccd74dbffd8cee19",
        rn:"15",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.resultcode == 200) {
          _this.setData({
            menuLists: res.data.result.data
          })
        }
      }
    })
    }
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
  inputMenu(e){
    // console.log(e.detail )
    // this.setData({
    //   menuNameLists: ["西红柿炒鸡蛋", "西红柿炒鸡蛋", "西红柿炒鸡蛋", "西红柿炒鸡蛋"]
    //  })
    var _this = this;
    wx.request({
      url: 'http://apis.juhe.cn/cook/query.php', //仅为示例，并非真实的接口地址
      data: {
        menu: e.detail.value,
        key:"c76457cbc3bde0b6ccd74dbffd8cee19",
        rn:"15",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.resultcode == 200){
          var arr = [];
          res.data.result.data.forEach((row) => {
            arr.push(row.title);
          })
          arr = arr.filter(function (value, index, self){
            return self.indexOf(value) == index;
          })
          console.log(arr)
          _this.setData({
            menuNameLists: arr
          })
        }
      }
    })
  },
  skip(e){
    this.setData({ searchShow:false });
    var _this = this;
    console.log(e.currentTarget.dataset.name)
    wx.request({
      url: 'http://apis.juhe.cn/cook/query.php', //仅为示例，并非真实的接口地址
      data: {
        menu: e.currentTarget.dataset.name,
        key: "c76457cbc3bde0b6ccd74dbffd8cee19",
        rn: "15",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.resultcode == 200) {
          _this.setData({
            menuLists: res.data.result.data
          })
        }
      }
    })
  },
  findDetail(e){
    wx.navigateTo({
      url: '../goods/goods_01?id=' + e.currentTarget.dataset.id
    })
  }
  
})