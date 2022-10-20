import React, { useState, useEffect } from 'react'

import { Layout, Select, Avatar as Avatar2 } from 'antd'

import { connect } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'

import classNames from 'classnames'

import Translations from '@airui/layout/Translations'
import TopBar from '@airui/layout/TopBar'
import TopBarDark from '@airui/layout/TopBarDark'
import SubBar from '@airui/layout/SubBar'
import MenuLeft from '@airui/layout/MenuLeft'
import MenuTop from '@airui/layout/MenuTop'
import Footer from '@airui/layout/Footer'
import FooterDark from '@airui/layout/FooterDark'
import Sidebar from '@airui/layout/Sidebar'
import SupportChat from '@airui/layout/SupportChat'

import nk from '../../@airui/layout/Footer/north-korea.png'
import j from '../../@airui/layout/Footer/japan.png'
import cf from '../../@airui/layout/Footer/chinese-flag.png'
import uk from '../../@airui/layout/Footer/united-kingdom.png'

const mapStateToProps = ({ settings, dispatch }) => ({
  menuLayoutType: settings.menuLayoutType,
  isContentMaxWidth: settings.isContentMaxWidth,
  isAppMaxWidth: settings.isAppMaxWidth,
  isGrayBackground: settings.isGrayBackground,
  isSquaredBorders: settings.isSquaredBorders,
  isCardShadow: settings.isCardShadow,
  isBorderless: settings.isBorderless,
  isTopbarFixed: settings.isTopbarFixed,
  isGrayTopbar: settings.isGrayTopbar,
  isFooterDark: settings.isFooterDark,
  dispatch,
})

const MainLayout = ({
  children,
  menuLayoutType,
  isContentMaxWidth,
  isAppMaxWidth,
  isGrayBackground,
  isSquaredBorders,
  isCardShadow,
  isBorderless,
  isTopbarFixed,
  isGrayTopbar,
  isFooterDark,
  dispatch,
}) => {
  const handleChange = e => {
    console.log(e)
    let value
    if (e === 'ko') value = 'ko-KR'
    else if (e === 'ch') value = 'zh-CN'
    else if (e === 'en') value = 'en-US'
    else value = 'ja-JP'
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'locale',
        value,
      },
    })
  }

  const { pathname } = useLocation()
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    if (
      pathname.includes('auth/Login') ||
      pathname.includes('forgot-password') ||
      pathname.includes('register')
    ) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }, [pathname])
  return (
    <div className={classNames({ air__layout__whiteBackground: isGrayBackground })}>
      <Layout
        className={classNames({
          air__layout__contentMaxWidth: isContentMaxWidth,
          air__layout__appMaxWidth: isAppMaxWidth,
          air__layout__grayBackground: isGrayBackground,
          air__layout__squaredBorders: isSquaredBorders,
          air__layout__cardsShadow: isCardShadow,
          air__layout__borderless: isBorderless,
        })}
      >
        {/* <Sidebar /> */}
        {/* <SupportChat /> */}
        {toggle ? (
          ''
        ) : (
          <>
            {menuLayoutType === 'left' && <MenuLeft />}
            {/* {menuLayoutType === 'top' && <MenuTop />} */}
          </>
        )}
        <Layout>
          <Layout.Header
            className={classNames('air__layout__header', {
              air__layout__fixedHeader: isTopbarFixed,
              air__layout__headerGray: isGrayTopbar,
            })}
          >
            {toggle ? (
              ''
            ) : (
              <>
                {menuLayoutType !== 'top-dark' && <TopBar />}
                {menuLayoutType === 'top-dark' && <TopBarDark />}
              </>
            )}
            {/* <SubBar /> */}
          </Layout.Header>
          <Layout.Content style={{ height: '100%', position: 'relative' }}>
            <div className="air__utils__content">{children}</div>
          </Layout.Content>
          {toggle ? (
            ''
          ) : (
            <>
              <div
                style={{
                  'margin-bottom': '19px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  'margin-right': '20px',
                }}
              >
                {/* <Translations /> */}
              </div>
            </>
          )}
          <Layout.Footer>
            {!isFooterDark && <Footer />}
            {isFooterDark && <FooterDark />}
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
