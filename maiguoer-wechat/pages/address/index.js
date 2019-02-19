var app = getApp();
var address = [{
  id: 1,
  province:'湖北省',
  city:'咸宁市',
  county:'嘉鱼县',
  addr2: '牌洲湾镇中堡村剩下',
  name: '张三',
  phone: '15242025942',
  moren: true
},
  {
    id: 2,
    province: '湖北省',
    city: '咸宁市',
    county: '嘉鱼县',
    addr2:'牌洲湾镇中堡村剩下的是凑字数的1312313',
    name: '栗色',
    phone: '15242025942',
    moren: false
  }
];
Page({
  data: {
    cartImg: '../../images/cart-null.png',
    tipWords: '暂无收获地址',
  },
  onLoad: function () {
    var that = this;
    if (address.length > 0) {
      that.setData({
        address: address
      })
    }
  },
  chooseGoods: function (e) {
    console.log('radio发生change事件，携带value值为：', e.target.dataset)
    var choose = e.currentTarget.dataset;
    if (choose == 0) {

    }
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
  // 删除单个
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1); // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) { // 如果购物车为空
      this.setData({
        hasList: false // 修改标识为false，显示购物车为空页面
      });
    } else { // 如果不为空
      this.getTotalPrice(); // 重新计算总价格
    }
  },
  chooseAddr:function(e){
    var pages = getCurrentPages();
    var prevPage = pages[pages.length-2];
    var address = e.currentTarget.dataset.address;
    console.log(e)
    prevPage.setData({
      address: address,
      hasAddress: true
    },function(){
      wx:wx.navigateBack()
    })
  },
})