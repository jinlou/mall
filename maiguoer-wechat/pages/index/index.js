//获取应用实例
var app = getApp();
var choiceItems = [{
    src: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg",
    id: "1",
    goodsName: "随便起个名字1",
    price: "11111",
    ntegral: 100
  },
  {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg",
    id: "2",
    goodsName: "随便起个名字2",
    price: "22222",
    ntegral: 200
  },
  {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=7d0864b547543635a5b4d28bdfd281e0&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F0066kt37gy6ScIu6XfDe5%26690",
    id: "3",
    goodsName: "随便起个名字3",
    price: "33333",
    ntegral: 300
  }
];
var images = [{
    src: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg",
    id: "1"
  },
  {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg",
    id: "2"
  },
  {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=7d0864b547543635a5b4d28bdfd281e0&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F0066kt37gy6ScIu6XfDe5%26690",
    id: "3"
  }
];
var venuesItems = [{
    src: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg",
    id: "1",
    goodsName: "随便起个名字1随便起个名字1随便起个名字1"
  },
  {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=34c19e803463c7f5f3cdb3009ed42ea7&imgtype=0&src=http%3A%2F%2Fpic7.photophoto.cn%2F20080602%2F0042040296520124_b.jpg",
    id: "2",
    goodsName: "随便起个名字2"
  },
  {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544707501634&di=7d0864b547543635a5b4d28bdfd281e0&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F0066kt37gy6ScIu6XfDe5%26690",
    id: "3",
    goodsName: "随便起个名字3"
  }
];
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: true, // loading
    images: [],
    choiceItems: [],
    venuesItems: [],
    noMore: false
  },

  //事件处理函数
  swiperchange: function(e) {
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log('onLoad')
    var that = this
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo: userInfo
      })
    })

    that.setData({
      images: images,
      venuesItems: venuesItems,
      choiceItems: choiceItems
    })
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         that.setData({
    //             images: res.data
    //         })
    //     }
    // })

    //venuesList
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         that.setData({
    //             venuesItems: res.data.data
    //         })
    //         setTimeout(function () {
    //             that.setData({
    //                 loadingHidden: true
    //             })
    //         }, 1500)
    //     }
    // })

  },
  getMore: function(e) {
    console.log("getMore")
    console.log(this.data.choiceItems)
    var arr1 = this.data.choiceItems;
    var i = arr1.length + 1;
    var arr1_item = {
      src: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg",
      id: i,
      goodsName: "随便起个名字" + i,
      price: i * 11111,
      ntegral: i * 100
    };

    //如果数据到达10条的时候就别加载更多了
    if (i == 10) {
      this.setData({
        noMore: true
      })
      return false;
    }
    arr1.push(arr1_item)
    console.log(arr1)
    this.setData({
      choiceItems: arr1
    })
  }
})