Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    array: ['不限时送货时间', '工作日送货', '双休日、假日送货'],
    index: 0,
    hasAddress: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    // var payId = options.id
    // var data = json.homeIndex[payId]
    // this.setData({
    //   data:data
    // })
  },
  chooseAddr: function() {
    wx.navigateTo({
      url: '../address/index'
    })
  },
  onShow: function() {
    console.log(this.data.address)
  }
})