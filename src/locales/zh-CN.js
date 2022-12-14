import localeAntd from 'antd/es/locale/zh_CN'

const messages = {
  'topBar.issuesHistory': '发布历史',
  'topBar.typeToSearch': '搜索...',
  'topBar.actions': '动作',
  'topBar.status': '状态',
  'topBar.profileMenu.hello': '你好',
  'topBar.profileMenu.billingPlan': '结算计划',
  'topBar.profileMenu.role': '角色',
  'topBar.profileMenu.email': '电子邮件',
  'topBar.profileMenu.phone': '电话',
  'topBar.profileMenu.editProfile': '编辑个人资料',
  'topBar.profileMenu.logout': '登出',
  'sideBar.general.home': '家',
  'sideBar.general.Favorites': '收藏夹',
  'sideBar.general.categories': '类别',
  'sideBar.general.lisitngs': '列表',
  'sideBar.general.chat': '聊天',
  'sideBar.general.purchaseHistory': '购买历史',
  'sideBar.utilities.myProfile': '我的简历',
  'sideBar.utilities.settings': '设置',
  'sideBar.utilities': '实用程序',
  'sideBar.general': '一般的',
  'sideBar.products': '产品',
  'sideBar.sellNow': '立即出售',
  'topBar.location': '地点',
  'signIn.welcome': '欢迎回来',
  'signIn.dontHaveAccount': '没有帐户',
  'signIn.signUp': '注册',
  'signIn.fillCredentials': '请填写询问凭证以登录',
  'signIn.saveInfo': '保存我的信息',
  'signIn.forgotPassword': '忘记密码',
  'signIn.signIn': '登入',
  'signUp.getStarted': '让我们开始吧',
  'signUp.fillCredentials': '请填写要求凭据以注册为新用户',
  'signUp.alreadyAccount': '已有账号?',
  'signUp.useMobile': '使用手机号码',
  'signUp.inputUserName': '请输入您的用户名',
  'signUp.inputPassword': '请输入您的密码',
  'signUp.agreement': '我同意接受促销',
  'signUp.secondAgreement': '登录即表示您同意我们的条款和服务及隐私政策',
  'sideBar.orderList': '订单',
  'sideBar.userList': '用户列表',
  'sideBar.adsManager': '广告经理',
  'sideBar.createCategory': '类别',
  'topbar.profile': '轮廓',
  'topbar.getHelp': '得到帮助',
  'topbar.share': '分享',
  active: '积极的',
  sold: '卖',
  Pending: '待办的',
  'placeholder.firstName': '输入名字',
  'placeholder.lastName': '输入姓氏',
  'placeholder.phone': '输入电话号码',
  'placeholder.done': '完毕',
  noProductsFound: '未找到产品',
  back: '后退',
  'settings.inviteFriends': '邀请朋友',
  'settings.myRewards': '我的奖励',
  'settings.whatsNew': '什么是新的',
  'settings.FAQ': '常问问题',
  'settings.deleteAccount': '删除帐户',
  'sell.productName': '输入产品名称',
  'sell.category': '类别',
  'sell.price': '输入价格',
  'sell.negotiable': '面议',
  'sell.description': '描述',
  'category.allCategories': '创造',
  'category.new': '新类别',
  'category.name': '分类名称',
  'category.create': '创造',
  'user.deleteUser': '管理用户',
  'userlist.firstName': '名',
  'userlist.lastName': '姓',
  'userlist.email': '电子邮件',
  'userlist.action': '行动',
  'topbar.noNotification': '您没有新通知',
  'topbar.seeNotification': '您将在此处看到您的通知',
  'purchase.latestOrder': '最新订单',
  'purchase.newOrder': '新命令',
  'category.edit': '编辑',
  'login.password': '密码',
  'login.inputEmail': '请输入您的电子邮件地址',
  'category.categoryName': '请输入类别名称',
  'category.editCategory': '编辑类别',
  'signup.selctCountry': '请选择你的国家',
  'signup.selectCity': '请选择您的城市',
  'signup.country': '国家',
  'signup.city': '城市',
  'topBar.professional': '专业的',
  'products.reserved': '预订的',
  'chat.moreChats': '更多聊天',
  'chat.viewSeller': '查看卖家',
  'chat.makeOffer': '出价',
  'chat.startTyping': '开始打字',
  'purchaseHistory.product': '产品',
  'purchaseHistory.price': '价格',
  'profile.verified': '本地验证',
  'profile.activeIn': '最后活跃',
  'profile.days': '天',
  'profile.joined': '已加入',
  'profile.recomended': '推荐的',
  'profile.noData': '还没有数据',
  'profile.youHave': '你有',
  'profile.feedBacks': '反馈',
  'profile.badge': '徽章',
  'profile.items': '项目',
  'profile.reviews': '评论',
  'profile.appScore': '应用评分',
  'profile.baseScore': '基础分数',
  'review.allReviews': '所有评论',
  'badge.pinnedBadge': '我的固定徽章',
  'badge.noGold': '还没有解锁金徽章',
  'badge.onlyGold': '只有金色徽章会固定到个人资料',
  'profile.positiveFeedback': '正面反馈',
  'profile.noPositiveFeed': '还没有正面反馈',
  'profile.guidelines': '社区准则',
  'getHelp.typeQuestion': '请输入您的问题',
  'getHelp.email': '请输入您的电子邮件',
  'getHelp.submit': '提交',
  'invite.friendEmail': '输入您朋友的电子邮件',
  'invite.invite': '邀请朋友',
  'share.copyLink': '复制链接',
  'share.shareEmail': '通过电子邮件分享',
  'share.shareWhatsApp': '分享到 Whatsapp',
  'share.shareFacebook': '在脸书上分享',
  'share.shareTwitter': '分享到Twitter',
  'new.live': '现在住',
  'new.nowOpen': '我们现在开始营业',
  'new.introducing': '介绍买卖',
  'new.nowYouCan': '现在您购买新的和令人兴奋的项目并获利',
  'new.newYear': '新年新应用',
  'new.liveData': '我们将于 2023 年 1 月 1 日上线',
  'new.commingSoon': '快来了',
  'new.development': '我们正在开发中',
  'faq.howMany': '我可以卖多少产品?',
  'faq.basicPlan': '什么是基本计划',
  'faq.basicPlanAns': '在基本计划中，您可以免费销售 5 种产品',
  'faq.profits': '买卖如何赚取利润?',
  'faq.profitAns': '我们对每笔销售收取佣金.',
  'faq.moreThanFive': '我有超过 5 个产品我该怎么办',
  'faq.moreThanFiveAns': '您可以选择正常或执行计划',
  'faq.changeProfile': '如何更改我的个人资料图片?',
  'faq.changeProfileAns': '转到个人资料然后编辑个人资料.',
  'signup.selectLanguage': '选择语言',
  'signup.pleaseChooseAvatar': '请选择您的头像',
  'signup.lastStep': '最后一步',
  'signup.Facebook': '使用 Facebook 登录',
  'signup.Google': '使用 Google 登录',
  'product.review': '添加评论',
  'delete.userConfirmation': '您要删除此用户吗？',
  'delete.ownConfirmation': '您想删除您的帐户吗？',
  search: '搜索',
  'search.heading': '通过图片搜索产品',
  'review.reviewMessage': '请添加您的评论',
  'search.searchResults': '搜索结果',
  'order.selectProduct': "请选择产品",
  'purchaseHistory.status': '订单状态',
  'promotion.heading': '您可以从此处编辑价格 + 描述',
  'promotion.promoPrice': '促销价',
  'promotion.promoDescription': '促销说明',
  'promotion.newPromo': '新促销优惠',
  'promotion.editPromo': '编辑促销优惠',
}

export default {
  locale: 'zh-CN',
  localeAntd,
  messages,
}
