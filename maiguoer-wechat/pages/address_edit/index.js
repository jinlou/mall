var app = getApp();
Page({
  data: {
    cartImg: '../../images/cart-null.png',
    tipWords: '暂无收获地址',
    region: ['北京市', '北京市', '东城区'],
  },
  onLoad: function(options) {
    var that = this;
    console.log(options)
    // if(options.id){
    //   for (var key in options) {
    //     console.log(key)
    //     console.log(options[key])
    //     that.setData({
    //       key: options[key]
    //     })
    //   }
    // }
    
    // 编辑
    if (options.id) {
      that.setData({
        id: options.id,
        name: options.name,
        phone: options.phone,
        province: options.province,
        city: options.city,
        county: options.county,
        addr2: options.addr2,
        region: [options.province, options.city, options.county]
      })
      console.log()
    }
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})