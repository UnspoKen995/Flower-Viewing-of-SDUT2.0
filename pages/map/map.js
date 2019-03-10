// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    longitude: 118.00121068954468, //经度
    latitude: 36.81053881337006, //纬度
    scale: 16,
    polyline: [],
    markers: [
      /*************************  西校区  *******************************/
      //连翘
      {
        iconPath: "../img/location.png",
        id: 0,
        latitude: 36.8124751786, //纬度
        longitude: 117.9997102283, //经度
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "连翘\n花期：3月上旬-4月中旬\n形态特征：连翘属于落叶灌木\n枝开展或下垂，棕色、棕褐色或淡黄褐色，小枝土黄色或灰褐色，节间中空，节部具实心髓",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }

        /***
         * 
        callout://放大显示气泡
        {
            content: "",
            color: "#fff",
            fontSize: 16,
            borderRadius: 4,
            bgColor: "#000",
            padding: 0,
            display: "ALWAYS",
            textAlign: "center"
        },
           *
         ***/

      },
      //荷花
      {
        iconPath: "../img/location.png",
        id: 1,
        latitude: 36.8090940177,
        longitude: 117.9990153411,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "荷花\n花期：6-9月\n形态特征：多年生草本，是浮水性的植物，没有明显的茎，叶子盾状圆形\n荷花原产于中国，在水中生活，通常被种植于池塘之中\n花一般盛开于夏季，荷花也因而成为夏日之风物",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //寿星桃
      {
        iconPath: "../img/location.png",
        id: 2,
        latitude: 36.8086500177,
        longitude: 118.0010863411,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "寿星桃\n花期：3月下旬-4月中旬\n形态特征：叶小乔木，普通桃的变种\n有红色、白色、粉红色不同类型，是我国地方品种资源",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //美人梅
      {
        iconPath: "../img/location.png",
        id: 3,
        latitude: 36.812671,
        longitude: 118.005031,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "美人梅\n花期：3月中下旬-4月中旬\n形态特征：隶属园艺杂交种，由重瓣粉型梅花与红叶李杂交而成",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //紫荆
      {
        iconPath: "../img/location.png",
        id: 4,
        latitude: 36.808613,
        longitude: 117.996589,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "紫荆\n花期：3月下旬-4月中旬\n形态特征：丛生或单生灌木，高2-5米；树皮和小枝灰白色\n花紫红色或粉红色，2-10余朵成束",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //垂丝海棠
      {
        iconPath: "../img/location.png",
        id: 5,
        latitude: 36.806998,
        longitude: 118.000988,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "垂丝海棠\n花期：3-4月\n形态特征：落叶小乔木，高达5米，树冠开展\n叶片卵形或椭圆形至长椭卵形，伞房花序，具花4-6朵",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //丁香
      {
        iconPath: "../img/location.png",
        id: 6,
        latitude: 36.807242,
        longitude: 118.008262,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "丁香\n花期：4-5月\n形态特征：灌木或小乔木，高可达5米；树皮灰褐色或灰色\n叶片革质或厚纸质，卵圆形至肾形，圆锥花序直立，由侧芽抽生",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //鸢尾
      {
        iconPath: "../img/location.png",
        id: 7,
        latitude: 36.807859,
        longitude: 118.005498,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "鸢尾\n花期：4-5月\n形态特征：多年生草本，根状茎粗壮，斜伸；花蓝紫色，直径约10cm\n花期4-5月，果期6-8月",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //玉兰
      {
        iconPath: "../img/location.png",
        id: 8,
        latitude: 36.8054780177,
        longitude: 118.0074193411,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "玉兰\n花期：3-4月\n形态特征：落叶乔木，树高一般2～5米或高可达15米\n花白色，大型、芳香，先叶开放，花期10天左右",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //西府海棠
      {
        iconPath: "../img/location.png",
        id: 9,
        latitude: 36.8073130177,
        longitude: 118.0045273411,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "西府海棠\n花期：3-4月\n形态特征：小乔木，高达2.5-5米，树枝直立性强\n伞形总状花序，有花4-7朵，集生于小枝顶端，花叶同放",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //紫薇
      {
        iconPath: "../img/location.png",
        id: 10,
        latitude: 36.807396,
        longitude: 118.003932,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "紫薇(百日红)\n花期：6-9月\n形态特征：落叶灌木或小乔木，高可达7米\n叶互生或有时对生，纸质，椭圆形，花色艳丽\n开花时正当夏秋少花季节，花期极长",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //樱花
      {
        iconPath: "../img/location.png",
        id: 11,
        latitude: 36.8079920177,
        longitude: 118.0068083411,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "樱花\n花期：4-5月\n形态特征：樱花是乔木，树皮灰色\n花每枝3到5朵，成伞状花序，花瓣先端缺刻，花色多为白色、粉红色",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //大花萱草
      {
        iconPath: "../img/location.png",
        id: 12,
        latitude: 36.8082370177,
        longitude: 118.0037723411,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "大花萱草\n花期：7-8月\n形态特征：大花萱草肉质根茎较短\n花茎高出叶片，上方有分枝，小花2～4朵，有芳香，花大，具短梗和大型三角状苞片",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //杏梅
      {
        iconPath: "../img/location.png",
        id: 13,
        latitude: 36.8094381786,
        longitude: 118.0037572283,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "杏梅\n花期：3月\n形态特征：落叶乔木，枝叶均似山杏或杏，花呈杏花形\n多为复瓣，水红色或白色，瓣爪细长\n几乎无香味",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //北美海棠
      {
        iconPath: "../img/location.png",
        id: 14,
        latitude: 36.8112141786,
        longitude: 118.0036312283,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "北美海棠\n花期：4月份\n形态特征：学校引进种植有“绚丽”、“红丽”、“高原之火”、“凯尔斯”、“雪球”五个品种\n花型上由过去的野生种单瓣浅色变为深色、多色、重瓣，色彩绚丽，花量之大，令人叹为观止",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        },

      },
      //牡丹
      {
        iconPath: "../img/location.png",
        id: 15,
        latitude: 36.8125721786,
        longitude: 118.0040802283,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "牡丹\n花期：4月中下旬-5月上旬\n形态特征：多年生落叶小灌木，分枝短而粗\n牡丹花大而香，故又有“国色天香”之称",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
      //月季
      {
        iconPath: "../img/location.png",
        id: 16,
        latitude: 36.8119331786,
        longitude: 118.0048892283,
        width: 30,
        height: 30,
        callout: //点击显示气泡
        {
          content: "月季\n花期：5-10月\n形态特征：常绿或半常绿低矮灌木，小枝粗壮，圆柱形\n近无毛，有短粗的钩状皮刺\n学校主要引进栽植黄和平、红双喜、大红帽、阿尔丹斯、尼克尔、萨曼莎、阿波罗等十余个品种",
          color: "#FFFFFF",
          fontSize: 16,
          borderRadius: 4,
          bgColor: "#b3d4db",
          padding: 10,
          textAlign: "center"
        }
      },
    ]
  },

  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  // 控件绑定: 回到当前地址
  controlTap: function(e){
    
    let mpCtx = wx.createMapContext("map");
     mpCtx.moveToLocation();
  },

  controlDetail: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options);
    let markers = that.data.markers;
    console.log(markers);
    let id = options.id * 1;
    console.log(id);
    let detail = 'markers[' + id +'].iconPath'
    console.log(detail);
    console.log(that.data.markers[0].iconPath)
    this.setData({
      [detail]: "../img/location (1).png"
    })
    console.log(that.data.markers[0].iconPath)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})