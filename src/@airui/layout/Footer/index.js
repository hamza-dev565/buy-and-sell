import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { notification, Input, Button, Form, Checkbox, Select, Avatar as Avatar2 } from 'antd'
import classNames from 'classnames'
import style from './style.module.scss'
import nk from './north-korea.png'
import j from './japan.png'
import cf from './chinese-flag.png'
import uk from './united-kingdom.png'

const mapStateToProps = ({ settings, dispatch }) => ({ settings, dispatch })

const Footer = ({ settings: { isContentMaxWidth, logo, description }, dispatch }) => {
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
  return (
    <div>
      {!pathname.includes('register') &&
        !pathname.includes('Login') &&
        !pathname.includes('forgot-password') && (
          <div
            className={classNames(style.footer, {
              [style.footerFullWidth]: !isContentMaxWidth,
            })}
          >
            <div className={style.inner} style={{ paddingBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
                <div>
                  {/* <p> */}
                  <p style={{ color: '#888888', marginTop: '11px', marginBottom: '0px' }}>
                    © 2022 <strong style={{ color: '#1D9666' }}>Buy & Sell.</strong> All Rights
                    Reserved
                  </p>
                  {/* </p> */}
                </div>
                {/* <div className="col-md-4">
            <div className={style.logo}>
              <div className={style.logo__letter}>A</div>
              <div className={style.logo__name}>{logo}</div>
              <div className={style.logo__descr}>{description}</div>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default connect(mapStateToProps)(Footer)
