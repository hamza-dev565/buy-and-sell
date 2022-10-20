import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { useDispatch, connect, useSelector } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'

import { Select } from 'antd'

import Search from './Search'
import IssuesHistory from './IssuesHistory'
import Status from './Status'
import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'

import bellIcon from './bell.svg'
import homeIcon from './homeIcon.svg'
import listIcon from './list-ul.svg'
import rightIcon from './rightIcon.svg'
import style from './style.module.scss'
import NotificationSection from './notification'

const mapStateToProps = ({ menu, settings }) => ({
  menuData: menu.menuData,
  settings,
  flyoutActive:
    (settings.menuType === 'flyout' ||
      settings.menuType === 'compact' ||
      settings.isMenuCollapsed) &&
    !settings.isMobileView,
})

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const TopBar = ({ settings, intl }) => {
  const [openSearchBox, setOpenSearchBox] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const aa = useSelector(state => state)
  // console.log('seeting sdsdf  sdfsdf  sdfsd ', aa)
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const ref = useRef(null)

  useOutsideAlerter(ref, () => setOpenNotification(false))

  const toggleMenu = e => {
    e.preventDefault()
    const { isMenuCollapsed } = settings
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })
  }

  useEffect(() => {
    if (pathname.includes('main-page')) {
      setName(intl.formatMessage({ id: 'sideBar.general.home' }))
    } else if (pathname.includes('category')) {
      setName(intl.formatMessage({ id: 'sideBar.general.categories' }))
    } else if (pathname.includes('chat')) {
      setName(intl.formatMessage({ id: 'sideBar.general.chat' }))
    } else if (pathname.includes('listings')) {
      setName(intl.formatMessage({ id: 'sideBar.general.lisitngs' }))
    } else if (pathname.includes('purchaseHistory')) {
      setName(intl.formatMessage({ id: 'sideBar.general.purchaseHistory' }))
    } else if (pathname.includes('favorites')) {
      setName(intl.formatMessage({ id: 'sideBar.general.Favorites' }))
    } else if (pathname.includes('apps/profile')) {
      setName(intl.formatMessage({ id: 'sideBar.utilities.myProfile' }))
    } else if (pathname.includes('settings')) {
      setName(intl.formatMessage({ id: 'sideBar.utilities.settings' }))
    } else if (pathname.includes('sell')) {
      setName(intl.formatMessage({ id: 'sideBar.sellNow' }))
    } else if (pathname.includes('editprofile')) {
      setName(intl.formatMessage({ id: 'topBar.profileMenu.editProfile' }))
    } else if (pathname.includes('user-list')) {
      setName(intl.formatMessage({ id: 'sideBar.userList' }))
    } else if (pathname.includes('search')) {
      setName(intl.formatMessage({ id: 'search' }))
    } else setName(intl.formatMessage({ id: 'sideBar.sellNow' }))
  }, [pathname])

  return (
    <div>
      {!pathname.includes('register') && !pathname.includes('login') && (
        <div
          className={style.wraper}
          style={{ borderLeft: '1px solid #2D5A5B', paddingLeft: '21px' }}
        >
          <div style={{ display: 'flex' }}>
            <div className={style.homeWraper}>
              <a href="#" onClick={toggleMenu} onKeyDown={toggleMenu}>
                <img
                  src={settings.isMenuCollapsed ? rightIcon : homeIcon}
                  alt="home"
                  width={17}
                  height={17}
                />
              </a>
              {!openSearchBox && (
                <span
                  style={{
                    color: 'white',
                    margin: '0px',
                    fontSize: '14px',
                    borderRight: '1px solid #2D5A5B',
                  }}
                  className={style.menuStyle}
                >
                  {name}
                </span>
              )}
            </div>
            {!openSearchBox && (
              <div
                className="d-flex justify-content-center flex-column p-4 "
                style={{ padding: '0px 20px' }}
              >
                <span style={{ fontSize: '18px', marginLeft: '2%' }}>
                  <FormattedMessage id="topBar.location" />
                </span>
                <select
                  className={`${style.selectBox}  `}
                  style={{ color: 'white', fontSize: '99%', appearance: 'menulist' }}
                  aria-label="Default select example"
                >
                  <option className={style.options} selected>
                    Flat D5, Road 04, California USA
                  </option>
                  <option className={style.options} value="1">
                    Shenzhen
                  </option>
                  <option className={style.options} value="2">
                    Beijing
                  </option>
                  <option className={style.options} value="3">
                    Seoul
                  </option>
                  <option className={style.options} value="3">
                    Tokyo
                  </option>
                  <option className={style.options} value="3">
                    Hong Kong
                  </option>
                </select>

                {/* <Select
                  size="large"
                  placeholder="Country"
                  style={{ background: 'transparent','text-color':'white','width':'100px',color: 'white', fontSize: '1vw '}}
                  bordered={false}
                >
                  <Select.Option value="ko" style={{display:'inline-block'}}>Canada</Select.Option>
                  <Select.Option value="ko" style={{display:'inline-block'}}> Afghanistan</Select.Option>
                  <Select.Option value="ko">Korea</Select.Option>
                  <Select.Option value="ko">Mexico</Select.Option>
                </Select> */}
              </div>
            )}
          </div>
          <div className={style.topbar}>
            <div className="mr-4">
              <Search openSearchBox={openSearchBox} setOpenSearchBox={setOpenSearchBox} />
            </div>
            {!openSearchBox && (
              <>
                <div className="mr-4">
                  {/* <Link to="ui-kits/bootstrap"> */}
                  <img src={listIcon} alt="asd" width={15} height={15} />
                  {/* <i className={` fe fe-settings`} style={{ color: 'white', fontSize: '15px' }} /> */}
                  {/* </Link> */}
                </div>
                <NotificationSection />
                <div>
                  <UserMenu />
                </div>
                <div>{/* <LanguageSwitcher /> */}</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(injectIntl(TopBar)))
