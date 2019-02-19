//app.js
App({
  onLaunch: function () {
    console.log('App Launch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  // 页面找不到时重定向
  onPageNotFound(res) {
    // 如果是 tabbar 页面，请使用 wx.switchTab
    wx.switchTab({
      url: 'pages/index/index'
    }) 
    // 如果不是 tabbar 页面，请使用 wx.redirectTo
    // wx.redirectTo({
    //   url: 'pages/...'
    // }) 
  },
  getUserInfo:function(cb){
    console.log(cb)
    console.log(typeof cb)
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (r) {
          console.log(111111)
          console.log(r.code)
          that.getOpenId(r.code)
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData:{
    userInfo:null
  },
  getOpenId: function(code){//向登录接口发送请求，获取openid
    var that = this;
    wx.request({
      url: 'https://www.see-source.com/weixinpay/GetOpenId',
      method: 'POST',// 大写
      header: {
        'content-type': 'application/x-www-form-urlencoded'//小写
      },
      data:{
        'code':code
      },
      success:function(res){
        console.log(res)
      }
    })
  }
})