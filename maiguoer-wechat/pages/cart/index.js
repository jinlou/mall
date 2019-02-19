var app = getApp();
var carts = [{
    id: 1,
    src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1544697417&di=e856faa2ddb4c688631c73fa7ab3e902&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193400_jRJi3.jpeg',
    goodsName: "我的团吧啊阿瓦达防辐射的方式的范围额问我额而愤然为额",
    desc: "设计的九 分十九的 警方斯蒂芬",
    price1: 111,
    price2: 222,
    ntegral: 100,
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
    cartImg: '../../images/cart-null.png',
    tipWords: '购物车空空如也',
    carts: [],
    totalPrice: 0, // 总价，初始为0
    selectAllStatus: false, // 全选状态，默认全选
  },
  onLoad: function() {
    var that = this;
    if (carts.length>0){
      for (var i = 0; i < carts.length; i++) {
        carts[i].selected = false;
        carts[i].num = 1;
      }
      console.log(carts)
      that.setData({
        carts: carts
      })
    }
  },
  chooseGoods: function(e) {
    console.log('radio发生change事件，携带value值为：', e.target.dataset)
    var choose = e.currentTarget.dataset;
    if(choose == 0){

    }
  },
  // 获取总价
  getTotalPrice() {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].selected) { // 判断选中才会计算价格
        console.log(carts[i].num)
        console.log(carts[i].price)
        total += Number(carts[i].num) * Number(carts[i].price1); // 所有价格加起来
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },
  // 点击单个
  selectList(e) {
    const index = e.currentTarget.dataset.index; // 获取data- 传进来的index
    let carts = this.data.carts; // 获取购物车列表
    const selected = carts[index].selected; // 获取当前商品的选中状态
    carts[index].selected = !selected; // 改变状态
    console.log(carts)
    this.setData({
      carts: carts
    });
    this.getTotalPrice(); // 重新获取总价
  },
  // 点击全选
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus; // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus; // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice(); // 重新获取总价
  },
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 输入数量
  bindReplaceInput(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    console.log(e.detail.value)
    carts[index].num = e.detail.value;
    this.setData({
      carts: carts
    });
    console.log(carts)
    this.getTotalPrice();
  },
  // 删除单个
  deleteList(e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定删除吗？',
      showCancel :true,
      confirmColor: '#8c3fd9',
      success:function(res){
        if(res.confirm){// 确定删除
          const index = e.currentTarget.dataset.index;
          let carts = that.data.carts;
          carts.splice(index, 1); // 删除购物车列表里这个商品
          that.setData({
            carts: carts
          });
          if (!carts.length) { // 如果购物车为空
            that.setData({
              hasList: false // 修改标识为false，显示购物车为空页面
            });
          } else { // 如果不为空
            that.getTotalPrice(); // 重新计算总价格
          }
          wx.showToast({
            title: '删除成功！',
          })
        }
        
      }
    })
    
  }
})