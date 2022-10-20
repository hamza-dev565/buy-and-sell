import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { FormattedMessage, injectIntl } from 'react-intl'
import Translations from '@airui/layout/Translations'
import { Link, useLocation } from 'react-router-dom'
import actions from 'redux/userlist/actions'
import ProductItems from 'components/productItems'
import Catalog from 'components/catalog'
import fireIcon from './images/fire.svg'
import butterfly from './images/butterfly.png'
import chair from './images/chair.png'
import gift from './images/gift.png'
import helpinghand from './images/helping-hand.png'
import language from './images/language.png'
import fider from './images/fider.png'
import ne from './images/new.png'
import faq from './images/faq.png'
import add from './images/add-user.png'
import share from './images/share.png'
import football from './images/football.png'
import lap from './images/lap.png'
import orange from './images/orange.png'
import pant from './images/pant.png'
import shirt from './images/shirt.png'
import xbox from './images/xbox.png'
import style from './style.module.scss'
import './style.css'

const { confirm } = Modal

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const CategoryPage = ({ category, product, dispatch, intl }) => {
  const deleteAccount = () => {
    console.log('deleteAccount')
    confirm({
      title: intl.formatMessage({ id: 'delete.ownConfirmation' }),
      icon: <ExclamationCircleOutlined />,
      // content: `test`,

      onOk() {
        console.log('OK')
        dispatch({
          type: actions.DELETE_MY_ACCOUNT,
          payload: {},
        })
      },

      onCancel() {
        console.log('Cancel')
      },
    })
  }

  return (
    <>
      <div style={{ border: '1px solid lightgray', width: '40vw' }}>
        <List
          itemLayout="horizontal"
          // style={}
          dataSource={items}
          renderItem={item => {
            if (item.name !== 'language') {
              return (
                <List.Item
                  className={style.cursorPointer}
                  style={{ fontSize: '1vw' }}
                  onClick={() => {
                    // setCurrentCategory(item.id)
                    // setIsCategoryList(false)
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={item?.image}
                        style={{
                          marginLeft: '15px',
                          borderRadius: '0px',
                          width: '1.5vw',
                          height: '1.5vw',
                        }}
                      />
                    }
                    title={
                      <Link to={item.goto}>
                        <div>
                          <FormattedMessage id={item.name} />
                          {/* <div className={style.itemAction}>
                        <span />
                      </div> */}
                        </div>
                      </Link>
                    }
                    description=""
                  />
                </List.Item>
              )
            }
            return (
              <List.Item
                className={style.cursorPointer}
                style={{ fontSize: '1vw' }}
                onClick={() => {
                  // setCurrentCategory(item.id)
                  // setIsCategoryList(false)
                }}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={item?.image}
                      style={{
                        marginLeft: '15px',
                        borderRadius: '0px',
                        width: '2.2vw',
                        height: '2.5vw',
                      }}
                    />
                  }
                  title={<Translations />}
                  description=""
                />
              </List.Item>
            )
          }}
        />
      </div>
      <button onClick={deleteAccount} type="button" className={style.btn}>
        <FormattedMessage id="settings.deleteAccount" />
      </button>
    </>
  )
}

export default connect(mapStateToProps)(injectIntl(CategoryPage))

const items = [
  { id: 1, name: 'topbar.getHelp', image: helpinghand, goto: '/help' },
  { id: 2, name: 'settings.inviteFriends', image: add, goto: '/invite' },
  { id: 3, name: 'settings.myRewards', image: gift, goto: '/rewards' },
  { id: 4, name: 'topbar.share', image: share, goto: '/share' },
  { id: 5, name: 'settings.whatsNew', image: ne, goto: '/new' },
  { id: 6, name: 'settings.FAQ', image: faq, goto: '/faq' },
  { id: 7, name: 'language', image: language, goto: '/faq' },
]
