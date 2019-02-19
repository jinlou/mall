var app = getApp();
var allClassificateArr = [{
    id: 1,
    classificateName: "精选1"
  },
  {
    id: 2,
    classificateName: "精选2"
  },
  {
    id: 3,
    classificateName: "精选3"
  },
  {
    id: 4,
    classificateName: "精选4"
  },
  {
    id: 5,
    classificateName: "精选5"
  }
];
var allGoods = [{
    id: 1,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 111,
    price2: 222,
    ntegral: 100
  },
  {
    id: 2,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 222,
    price2: 333,
    ntegral: 200
  },
  {
    id: 3,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 333,
    price2: 444,
    ntegral: 300
  },
  {
    id: 4,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 444,
    price2: 444,
    ntegral: 400
  },
  {
    id: 5,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 555,
    price2: 444,
    ntegral: 500
  },
  {
    id: 6,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 666,
    price2: 444,
    ntegral: 600
  },
];
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0,
    allClassificate1: true,
    priceSort: false,
    amountSort: false,
    hasGoods: false
  },
  onLoad: function() {

    var that = this
    that.setData({
      allClassificateArr: allClassificateArr,
      allGoods: allGoods
    })

    if (allClassificateArr.length>0){
      that.setData({
        allClassificate1: true
      })
    }
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         that.setData({
    //             navLeftItems: res.data,
    //             navRightItems: res.data
    //         })
    //     }
    // })


  },

  //事件处理函数
  switchRightTab: function(e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  allClassificate: function() {
    console.log(this.data.allClassificate1)
    this.setData({
      allClassificate1: !this.data.allClassificate1
    })
  },
  priceSort: function() {
    this.setData({
      priceSort: !this.data.priceSort
    })
  },
  amountSort: function() {
    this.setData({
      amountSort: !this.data.amountSort
    })
  },
  getMore: function (e) {
    console.log("getMore")
    console.log(this.data.allGoods)
    var arr1 = this.data.allGoods;
    var i = arr1.length + 1;
    var arr1_item = {
      id: i,
      src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
      goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
      desc: "设计的九 分十九的 警方斯蒂芬",
      price1: 111*i,
      price2: 222 * i,
      ntegral: 100 * i
    };
    allGoods.push(arr1_item)
    console.log(allGoods)
    this.setData({
      allGoods: allGoods
    })
  }

})