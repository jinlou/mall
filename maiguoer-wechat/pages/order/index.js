var app = getApp();
var orderAll = [{
    id: 1,
    orderNum: 201812120001,
    status: 1,
    goodsDetail: {
      src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
      goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
      desc: "设计的九 分十九的 警方斯蒂芬",
      price1: 111,
      price2: 222,
      ntegral: 100
    }
  },
  {
    id: 2,
    orderNum: 201812120002,
    status: 2,
    goodsDetail: {
      src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
      goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
      desc: "设计的九 分十九的 警方斯蒂芬",
      price1: 222,
      price2: 222,
      ntegral: 300
    }
  },
  {
    id: 3,
    orderNum: 201812120003,
    status: 3,
    goodsDetail: {
      src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
      goodsName: "我的团吧啊阿瓦达防辐射的",
      desc: "设计的九 分十九的 警方斯蒂芬",
      price1: 333,
      price2: 222,
      ntegral: 300
    }
  },
  {
    id: 4,
    orderNum: 201812120004,
    status: 4,
    goodsDetail: {
      src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
      goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
      desc: "设计的九 分十九的 警方斯蒂芬",
      price1: 444,
      price2: 222,
      ntegral: 400
    }
  },
];
Page({
  data: {
    cartImg: '../../images/cart-null.png',
    tipWords: '暂无收获地址',
    borderRed: 0,
  },
  onLoad: function() {
    var that = this;
    if (orderAll.length > 0) {
      that.setData({
        order: orderAll
      })
    }
  },
  // 点击分类
  changeType: function(e) {
    console.log(e)
    var type = e.currentTarget.dataset.type;
    console.log(type)
    console.log(orderAll)

    this.setData({
      borderRed: type
    })

    var newOrder = [];
    console.log(orderAll.length)

    if (type == 0) {
      newOrder = orderAll
    } else {
      if (orderAll.length > 0) {
        for (var i = 0; i < orderAll.length; i++) {
          console.log(i)
          if (orderAll[i].status == type) {
            newOrder.push(orderAll[i])
          }
        }
      }
    }

    console.log(newOrder)
    this.setData({
      order: newOrder
    })
  },

})