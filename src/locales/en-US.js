import localeAntd from 'antd/es/locale/en_US'

const messages = {
  'topBar.issuesHistory': 'Issues History',
  'topBar.typeToSearch': 'Start typing to search...',
  'topBar.actions': 'Actions',
  'topBar.status': 'Status',
  'topBar.profileMenu.hello': 'Hello',
  'topBar.profileMenu.billingPlan': 'Billing Plan',
  'topBar.profileMenu.role': 'Role',
  'topBar.profileMenu.email': 'Email',
  'topBar.profileMenu.phone': 'Phone',
  'topBar.profileMenu.editProfile': 'Edit Profile',
  'topBar.profileMenu.logout': 'Logout',
  'sideBar.general.home': 'Home',
  'sideBar.general.Favorites': 'Favorite Products',
  'sideBar.general.categories': 'Categories',
  'sideBar.general.lisitngs': 'Listings',
  'sideBar.general.chat': 'Chat',
  'sideBar.general.purchaseHistory': 'Purchase History',
  'sideBar.utilities.myProfile': 'My Profile',
  'sideBar.utilities.settings': 'Settings',
  'sideBar.utilities': 'Utilities',
  'sideBar.general': 'General',
  'sideBar.products': 'Products',
  'sideBar.sellNow': 'Sell Now',
  'topBar.location': 'Location',
  'signIn.welcome': 'Welcome Back',
  'signIn.dontHaveAccount': "Don't have an account?",
  'signIn.signUp': 'Sign up',
  'signIn.fillCredentials': 'Please fill up the asking credential to log in',
  'signIn.saveInfo': 'Save my information',
  'signIn.forgotPassword': 'Forgot Password?',
  'signIn.signIn': 'Sign In',
  'signUp.getStarted': 'Lets Get Started',
  'signUp.fillCredentials': 'Please fill up the asking credentials to register as a new user',
  'signUp.alreadyAccount': 'Already have an account?',
  'signUp.useMobile': 'Use Mobile Number',
  'signUp.inputUserName': 'Please input your user name',
  'signUp.inputPassword': 'Please input your password',
  'signUp.agreement': 'I agree to receive promotions',
  'signUp.secondAgreement': 'By signing in you agree to our Terms and Services & Privacy Policy',
  'sideBar.orderList': 'Order List',
  'sideBar.userList': 'User List',
  'sideBar.adsManager': 'Ads Manager',
  'sideBar.createCategory': 'Categories',
  'topbar.profile': 'Profile',
  'topbar.getHelp': 'Get Help',
  'topbar.share': 'Share',
  active: 'Active',
  sold: 'Sold',
  Pending: 'Pending',
  'placeholder.firstName': 'Enter First Name',
  'placeholder.lastName': 'Enter Last Name',
  'placeholder.phone': 'Enter Phone Number',
  'placeholder.done': 'Done',
  noProductsFound: 'No Products Found',
  back: 'Back',
  'settings.inviteFriends': 'Invite Friends',
  'settings.myRewards': 'My Rewards',
  'settings.whatsNew': "What's New",
  'settings.FAQ': 'FAQ',
  'settings.deleteAccount': 'Delete Account',
  'sell.productName': 'Enter a Product Name',
  'sell.category': 'Category',
  'sell.price': 'Enter Price',
  'sell.negotiable': 'Negotiable',
  'sell.description': 'Description',
  'category.allCategories': 'All Listed Categories',
  'category.new': 'New Category',
  'category.name': 'Category Name',
  'category.create': 'Create',
  'user.deleteUser': 'Manage User',
  'userlist.firstName': 'First Name',
  'userlist.lastName': 'Last Name',
  'userlist.email': 'Email',
  'userlist.action': 'Action',
  'topbar.noNotification': 'You have no new notification',
  'topbar.seeNotification': 'You will see your notifications here',
  'purchase.latestOrder': 'Latest Orders',
  'purchase.newOrder': 'New Order',
  'category.edit': 'Edit',
  'login.password': 'Password',
  'login.inputEmail': 'Please input your email address',
  'category.categoryName': 'Please input category Name',
  'category.editCategory': 'Edit Category',
  'signup.selctCountry': 'Please Select Your Country',
  'signup.selectCity': 'Please Select Your City',
  'signup.country': 'Country',
  'signup.city': 'City',
  'topBar.professional': 'Professional',
  'products.reserved': 'Reserved',
  'chat.moreChats': 'More Chats',
  'chat.viewSeller': 'View Seller',
  'chat.makeOffer': 'Make Offer',
  'chat.startTyping': 'Start Typing',
  'purchaseHistory.product': 'Product',
  'purchaseHistory.price': 'Price',
  'profile.verified': 'Local Verified',
  'profile.activeIn': 'Active in last',
  'profile.days': 'days',
  'profile.joined': 'Joined',
  'profile.recomended': 'Recomended',
  'profile.noData': 'No Data Yet',
  'profile.youHave': 'you have',
  'profile.feedBacks': 'Feedbacks',
  'profile.badge': 'Badge',
  'profile.items': 'Items',
  'profile.reviews': 'Reviews',
  'profile.appScore': 'App Score',
  'profile.baseScore': 'Base Score',
  'review.allReviews': 'All Reviews',
  'badge.pinnedBadge': 'My pinned badge',
  'badge.noGold': 'No Gold Badge unlocked yet',
  'badge.onlyGold': 'Only gold badge will pinned to the profile',
  'profile.positiveFeedback': 'Positive Feedback',
  'profile.noPositiveFeed': 'No positive feedback yet you have',
  'profile.guidelines': 'Community Guidelines',
  'getHelp.typeQuestion': 'Please Type Your Question',
  'getHelp.email': 'Please Type your Email',
  'getHelp.submit': 'Submit',
  'invite.friendEmail': "Enter your friend's email",
  'invite.invite': 'Invite Friend',
  'share.copyLink': 'Copy Link',
  'share.shareEmail': 'Share on email',
  'share.shareWhatsApp': 'Share on Whatsapp',
  'share.shareFacebook': 'Share on Facebook',
  'share.shareTwitter': 'Share on Twitter',
  'new.live': 'Live Now',
  'new.nowOpen': 'We are now open for business',
  'new.introducing': 'Introducing Buy and Sell',
  'new.nowYouCan': 'Now you buy new and exciting item and make profit',
  'new.newYear': 'New Year New App',
  'new.liveData': 'We will be live on 1 January 2023',
  'new.commingSoon': 'Coming Soon',
  'new.development': 'We are in Development',
  'faq.howMany': 'How Many Products I can sell?',
  'faq.basicPlan': 'What is basic plan',
  'faq.basicPlanAns': 'In Basic plan you can sell 5 products for free',
  'faq.profits': 'How Buy and Sell earns profits?',
  'faq.profitAns': 'We Charge commisions on every sale.',
  'faq.moreThanFive': 'I have more than 5 products what should i do',
  'faq.moreThanFiveAns': 'You can choose normal or executive plan',
  'faq.changeProfile': 'How do I change my profile image?',
  'faq.changeProfileAns': 'Go to profile then edit profile.',
  'signup.selectLanguage': 'Select Language',
  'signup.pleaseChooseAvatar': 'Please choose your avater image',
  'signup.lastStep': 'Last Step',
  'signup.Facebook': 'Sign in with Facebook',
  'signup.Google': 'Sign in with Google',
  'product.review': 'Add Review',
  'delete.userConfirmation': 'Do you Want to delete this user?',
  'delete.ownConfirmation': 'Do you Want to delete your account?',
  search: 'Search',
  'search.heading': 'Search Products via Image',
  'review.reviewMessage': 'Please Add your review',
  'search.searchResults': 'Search Results',
  'order.selectProduct': "Please Select a Product",
  'purchaseHistory.status': 'Order Status',
  'promotion.heading': 'You can edit the Price + Description from here',
  'promotion.promoPrice': 'Promotion Price',
  'promotion.promoDescription': 'Promotion Description',
  'promotion.newPromo': 'New Promo Offer',
  'promotion.editPromo': 'Edit Promo Offer',
}

export default {
  locale: 'en-US',
  localeAntd,
  messages,
}
