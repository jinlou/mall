var app = getApp();
var goodsDetail = {
  imgs: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg"],
  poster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg",
  id: "1",
  goodsName: "随便起个名字1",
  price1: "11111",
  price2: "11111",
  ntegral: 100,
  desc: "买不了吃亏，买的了上当",
  rules: ["规格1", "规格2", "规格3", "规格4"]
};
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },

  onLoad: function(options) {
    console.log(options)
    var that = this;
    that.setData({
      goodsDetail: goodsDetail
    })

    // 商品详情
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         //console.log(res.data.data);
    //         that.data.shopppingDetails = res.data.data;

    //         var goodsPicsInfo = [];
    //         var goodsPicsObj = {};
    //         var goodspic = res.data.data.goodspics;
    //         var goodspics = goodspic.substring(0, goodspic.length - 1);
    //         var goodspicsArr = goodspics.split("#");
    //         for (var i = 0; i < goodspicsArr.length; i++) {
    //             goodsPicsInfo.push({
    //                 "picurl": goodspicsArr[i]
    //             });
    //         }
    //         that.setData({
    //             goodsPicsInfo: goodsPicsInfo
    //         })
    //     }
    // })

  },
  addcart: function() {
    
  },
  goPay: function(){
    wx.navigateTo({
      url: '../pay/index?id=1'
    })
  },
})