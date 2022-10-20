import React from 'react'
import { ConfigProvider } from 'antd'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import english from './locales/en-US'
// import french from './locales/fr-FR'
// import russian from './locales/ru-RU'
import chinese from './locales/zh-CN'
import japanese from './locales/ja-JP'
import korean from './locales/ko-KR'

const locales = {
  'en-US': english,
  // 'fr-FR': french,
  // 'ru-RU': russian,
  'ja-JP': japanese,
  'ko-KR': korean,
  'zh-CN': chinese,
}

const mapStateToProps = ({ settings }) => ({ settings })

const Localization = ({ children, settings: { locale } }) => {
  const currentLocale = locales[locale] ? locales[locale] : locales['en-US']
  return (
    <ConfigProvider locale={currentLocale.localeAntd}>
      <IntlProvider locale={currentLocale.locale} messages={currentLocale.messages}>
        {children}
      </IntlProvider>
    </ConfigProvider>
  )
}

export default connect(mapStateToProps)(Localization)
