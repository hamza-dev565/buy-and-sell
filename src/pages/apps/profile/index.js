import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import actions from 'redux/userdata/actions'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import General1 from '@kit/widgets/General/1'
import General10v1 from '@kit/widgets/General/10v1'
import General12v1 from '@kit/widgets/General/12v1'
import General14 from '@kit/widgets/General/14'
import General15 from '@kit/widgets/General/15'
import List19 from '@kit/widgets/Lists/19'

import { Tabs, Input, Button, Upload, Form } from 'antd'
import rightIcon from './right-arrow.svg'
import heartIcon from './images/heart.svg'
import chatIcon from './images/chat.svg'
import style from './profile.module.scss'
import InputRangeComponenet from './input-range'

const { TabPane } = Tabs

const mapStateToProps = ({ userdataReducer, dispatch }) => ({
  dispatch,
  userdataReducer,
})

const AppsProfile = ({ userdataReducer, dispatch, intl }) => {
  const [tabKey, setTabKey] = useState('1')

  const changeTab = key => {
    setTabKey(key)
  }

  const listData = [
    {
      title: `1 ${intl.formatMessage({ id: 'profile.badge' })}`,
      content: `${intl.formatMessage({ id: 'profile.youHave' })} 4 ${intl.formatMessage({
        id: 'profile.feedBacks',
      })}`,
      url: `/badge`,
    },
    {
      title: `5 ${intl.formatMessage({ id: 'profile.items' })}`,
      content: `${intl.formatMessage({ id: 'profile.youHave' })} 4 ${intl.formatMessage({
        id: 'profile.feedBacks',
      })}`,
      url: `/favorites`,
    },
    {
      title: `4 ${intl.formatMessage({ id: 'profile.feedBacks' })}`,
      content: `${intl.formatMessage({ id: 'profile.youHave' })} 4 ${intl.formatMessage({
        id: 'profile.feedBacks',
      })}`,
      url: `/feedback`,
    },
    {
      title: `5 ${intl.formatMessage({ id: 'profile.reviews' })}`,
      content: `${intl.formatMessage({ id: 'profile.youHave' })} 4 ${intl.formatMessage({
        id: 'profile.feedBacks',
      })}`,
      url: `/review`,
    },
  ]

  useEffect(() => {
    dispatch({
      type: actions.GET_PROFILE,
    })
  }, [])
  return (
    <div>
      {/* <h1>Profile here</h1> */}
      <Helmet title="Profile" />
      <div className="row">
        <div
          className="col-xl-4 col-lg-12"
          style={{ height: '100vh', borderRight: '0.5px solid lightgray' }}
        >
          <div className={style.profileSec1}>
            <div className={style.circular}>
              <img
                style={{ width: '100%', height: '100%' }}
                src={`http://${userdataReducer.profile_image}`}
                alt="asd"
              />
            </div>
            <div className={style.info}>
              <h4>
                {userdataReducer.first_name === 'NA' ? 'first_name' : userdataReducer.first_name}{' '}
                {userdataReducer.last_name === 'NA' ? 'last_name' : userdataReducer.last_name}
              </h4>
              <p>{userdataReducer.email}</p>
              <Link to="/editprofile">
                <button type="button" className={style.btn}>
                  <FormattedMessage id="topBar.profileMenu.editProfile" />
                </button>
              </Link>
            </div>
          </div>
          <div className={style.list}>
            <ul>
              <li>
                <FormattedMessage id="profile.verified" />
              </li>
              <li>
                <FormattedMessage id="profile.activeIn" /> 3 <FormattedMessage id="profile.days" />
              </li>
              <li>
                <FormattedMessage id="profile.joined" />{' '}
                {new Date(userdataReducer.date_joined).toLocaleString()}
              </li>
            </ul>
          </div>
          <div className={style.dropDownWraper}>
            {listData.map(data => {
              return (
                <Link to={data?.url}>
                  <div className={style.item}>
                    <span style={{ fontSize: '14px' }}>{data.title}</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p className={style.text}>{data.content}</p>
                      <img src={rightIcon} alt="icon " />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div style={{ padding: '40px' }} className="col-xl-8 col-lg-12">
          <div style={{ borderBottom: '1px solid lightgray', paddingBottom: '20px' }}>
            <div>
              <InputRangeComponenet />
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <div className="d-flex">
                  <img src={heartIcon} alt="icon" style={{ marginRight: '10px' }} />
                  <span>
                    <FormattedMessage id="profile.noData" /> -%
                  </span>
                </div>
                <div className="d-flex justify-content-center">
                  <span>
                    <FormattedMessage id="profile.recomended" />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <span style={{ marginRight: '10px' }}>
                    <FormattedMessage id="profile.noData" /> -%
                  </span>
                  <img src={chatIcon} alt="icon" />
                </div>
                <div className="d-flex justify-content-center">
                  <span>
                    <FormattedMessage id="profile.recomended" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(AppsProfile))
