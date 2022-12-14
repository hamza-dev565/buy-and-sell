import localeAntd from 'antd/es/locale/ja_JP'

const messages = {
  'topBar.issuesHistory': '問題の履歴',
  'topBar.typeToSearch': '入力を開始して検索します...',
  'topBar.actions': '行動',
  'topBar.status': '状態',
  'topBar.profileMenu.hello': 'こんにちは',
  'topBar.profileMenu.billingPlan': '料金プラン',
  'topBar.profileMenu.role': '役割',
  'topBar.profileMenu.email': 'Eメール',
  'topBar.profileMenu.phone': '電話',
  'topBar.profileMenu.editProfile': 'プロファイル編集',
  'topBar.profileMenu.logout': 'ログアウト',
  'sideBar.general.home': '家',
  'sideBar.general.Favorites': 'お気に入りの商品',
  'sideBar.general.categories': 'カテゴリー',
  'sideBar.general.lisitngs': 'リスト',
  'sideBar.general.chat': 'チャット',
  'sideBar.general.purchaseHistory': '購入履歴',
  'sideBar.utilities.myProfile': '私のプロフィール',
  'sideBar.utilities.settings': '設定',
  'sideBar.utilities': 'ユーティリティ',
  'sideBar.general': '全般的',
  'sideBar.products': '製品',
  'sideBar.sellNow': '今すぐ売る',
  'topBar.location': '位置',
  'signIn.welcome': 'お帰りなさい',
  'signIn.dontHaveAccount': 'アカウントを持っていません?',
  'signIn.signUp': 'サインアップ',
  'signIn.fillCredentials': 'ログインするための認証情報を入力してください',
  'signIn.saveInfo': '私の情報を保存する',
  'signIn.forgotPassword': 'パスワードをお忘れですか？',
  'signIn.signIn': 'ログイン',
  'signUp.getStarted': '始めましょう',
  'signUp.fillCredentials':
    '新しいユーザーとして登録するには、求められている資格情報を入力してください',
  'signUp.alreadyAccount': 'すでにアカウントをお持ちですか？',
  'signUp.useMobile': '携帯電話番号を使用',
  'signUp.inputUserName': 'ユーザー名を入力してください',
  'signUp.inputPassword': 'パスワードを入力してください',
  'signUp.agreement': 'プロモーションを受け取ることに同意します',
  'signUp.secondAgreement':
    'サインインすると、利用規約とサービスおよびプライバシー ポリシーに同意したことになります',
  'sideBar.orderList': 'オーダーリスト',
  'sideBar.userList': 'ユーザー一覧',
  'sideBar.adsManager': '広告マネージャー',
  'sideBar.createCategory': 'カテゴリー',
  'topbar.profile': '轮廓',
  'topbar.getHelp': '助けを得ます',
  'topbar.share': 'シェア',
  active: 'アクティブ',
  sold: '売却',
  Pending: '保留中',
  'placeholder.firstName': '名を入力してください',
  'placeholder.lastName': '姓を入力',
  'placeholder.phone': '電話番号を入力',
  'placeholder.done': '終わり',
  noProductsFound: '商品が見つかりません',
  back: '戻る',
  'settings.inviteFriends': '友達を招待',
  'settings.myRewards': '私の報酬',
  'settings.whatsNew': '新着情報',
  'settings.FAQ': 'よくある質問',
  'settings.deleteAccount': 'アカウントを削除する',
  'sell.productName': '製品名を入力してください',
  'sell.category': 'カテゴリー',
  'sell.price': '価格を入力',
  'sell.negotiable': '応相談',
  'sell.description': '説明',
  'category.allCategories': 'リストされたすべてのカテゴリー',
  'category.new': '新たなカテゴリー',
  'category.name': '種別名',
  'category.create': '作成',
  'user.deleteUser': 'ユーザーの管理',
  'userlist.firstName': 'ファーストネーム',
  'userlist.lastName': '苗字',
  'userlist.email': 'Eメール',
  'userlist.action': 'アクション',
  'topbar.noNotification': '新しい通知はありません',
  'topbar.seeNotification': 'ここに通知が表示されます',
  'purchase.latestOrder': '最新の注文',
  'purchase.newOrder': '新規注文',
  'category.edit': '編集',
  'login.password': 'パスワード',
  'login.inputEmail': 'メールアドレスを入力してください',
  'category.categoryName': 'カテゴリ名を入力してください',
  'category.editCategory': 'カテゴリを編集',
  'signup.selctCountry': 'あなたの国を選択してください',
  'signup.selectCity': '都市を選択してください',
  'signup.country': '国',
  'signup.city': '街',
  'topBar.professional': 'プロ',
  'products.reserved': '予約済み',
  'chat.moreChats': 'その他のチャット',
  'chat.viewSeller': '出品者を見る',
  'chat.makeOffer': '申し出をする',
  'chat.startTyping': '入力を開始',
  'purchaseHistory.product': '製品',
  'purchaseHistory.price': '価格',
  'profile.verified': 'ローカル検証済み',
  'profile.activeIn': '最後にアクティブ',
  'profile.days': '日々',
  'profile.joined': '参加しました',
  'profile.recomended': 'おすすめされた',
  'profile.noData': 'まだデータがありません',
  'profile.youHave': 'あなたが持っている',
  'profile.feedBacks': 'フィードバック',
  'profile.badge': 'バッジ',
  'profile.items': 'アイテム',
  'profile.reviews': 'レビュー',
  'profile.appScore': 'アプリのスコア',
  'profile.baseScore': 'ベーススコア',
  'review.allReviews': 'すべてのレビュー',
  'badge.pinnedBadge': '固定バッジ',
  'badge.noGold': 'ゴールドバッジはまだアンロックされていません',
  'badge.onlyGold': 'ゴールド バッジのみがプロフィールに固定されます',
  'profile.positiveFeedback': '正のフィードバック',
  'profile.noPositiveFeed': 'まだ肯定的なフィードバックはありません',
  'profile.guidelines': 'コミュニティガイドライン',
  'getHelp.typeQuestion': '質問を入力してください',
  'getHelp.email': 'メールアドレスを入力してください',
  'getHelp.submit': '送信',
  'invite.friendEmail': '友達のメールアドレスを入力してください',
  'invite.invite': '友人を招待',
  'share.copyLink': 'リンクをコピーする',
  'share.shareEmail': 'メールで共有',
  'share.shareWhatsApp': 'Whatsappで共有する',
  'share.shareFacebook': 'Facebookでシェア',
  'share.shareTwitter': 'ツイッターでシェア',
  'new.live': '今を生きる',
  'new.nowOpen': '只今、営業中です',
  'new.introducing': '売買の紹介',
  'new.nowYouCan': '今、あなたは新しいエキサイティングなアイテムを購入して利益を上げています',
  'new.newYear': '新年の新しいアプリ',
  'new.liveData': '2023 年 1 月 1 日にライブ配信されます',
  'new.commingSoon': '近日公開',
  'new.development': '私たちは開発中です',
  'faq.howMany': '何個の製品を販売できますか?',
  'faq.basicPlan': '基本プランとは',
  'faq.basicPlanAns': 'ベーシックプランでは5商品を無料で販売可能',
  'faq.profits': '売買で利益を得る方法?',
  'faq.profitAns': '販売ごとに手数料を請求します.',
  'faq.moreThanFive': '5 つ以上の製品を持っています。どうすればよいですか',
  'faq.moreThanFiveAns': '通常またはエグゼクティブプランを選択できます',
  'faq.changeProfile': 'プロフィール画像を変更するにはどうすればよいですか?',
  'faq.changeProfileAns': 'プロフィールに移動し、プロフィールを編集します.',
  'signup.selectLanguage': '言語を選択する',
  'signup.pleaseChooseAvatar': 'アバター画像を選択してください',
  'signup.lastStep': '最後のステップ',
  'signup.Facebook': 'Facebookでサインイン',
  'signup.Google': 'Google でサインイン',
  'product.review': 'レビューを追加',
  'delete.userConfirmation': 'このユーザーを削除しますか?',
  'delete.ownConfirmation': 'アカウントを削除しますか?',
  search: '探す',
  'search.heading': '按图片搜索产品',
  'review.reviewMessage': 'レビューを追加してください',
  'search.searchResults': 'の検索結果',
  'order.selectProduct': "製品を選択してください",
  'purchaseHistory.status': '注文の状況',
  'promotion.heading': 'ここから価格と説明を編集できます',
  'promotion.promoPrice': 'プロモーション価格',
  'promotion.promoDescription': 'プロモーションの説明',
  'promotion.newPromo': '新しいプロモーションオファー',
  'promotion.editPromo': 'プロモーションオファーを編集',
}

export default {
  locale: 'ja-JP',
  localeAntd,
  messages,
}
