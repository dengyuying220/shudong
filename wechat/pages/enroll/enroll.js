// pages/enroll/enroll.js
Page({

  /**
   * Page initial data
   */
  data: {
    username:"",
    telphone: "",
    password: "",
    confirm_password: "",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var r = /a(b+)a/;
    var arr = r.exec('_abbba_aba_');
    console.log(arr);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  name_input: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  tel_input: function (e) {
    this.setData({
      telphone: e.detail.value
    })
  },
  pass_input: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  conpass_input: function (e) {
    this.setData({
      confirm_password: e.detail.value
    })
  },
  goSignIn: function () {
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  SignUp: function () {
    var that = this;
    if (that.data.username == "") {
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
      })
    } else if (that.data.telphone == "") {
      wx.showModal({
        title: '提示',
        content: '请输入手机号码',
        showCancel: false,
      })
    } else if (0) {

    }
    /* 
    if (that.data.username == "") {
      wx.showModal({
        title: '提示',
        content: '用户名不能为空',
        showCancel: false,
      })
    }
    if (that.data.username == "") {
      wx.showModal({
        title: '提示',
        content: '用户名不能为空',
        showCancel: false,
      })
    } */
  },
  
})