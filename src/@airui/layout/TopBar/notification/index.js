import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Avatar, Badge } from 'antd'
import notificationIcon from '../bell.svg'
import styles from '../UserMenu/style.module.scss'

const mapStateToProps = ({ user }) => ({ user })

const NotificationSection = ({ dispatch, user }) => {
  const [count, setCount] = useState(7)
  const history = useHistory()

  //   const logout = e => {
  //     e.preventDefault()
  //     dispatch({
  //       type: 'user/LOGOUT',
  //     })
  //   }

  const addCount = () => {
    setCount(count + 1)
  }

  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <strong>
          <FormattedMessage id="topbar.noNotification" />
          <br />
          <FormattedMessage id="topbar.seeNotification" />
          {/* <FormattedMessage id="topBar.profileMenu.hello" />, {user.name || 'Anonymous'} */}
        </strong>
        <div>
          <strong className="mr-1">
            <FormattedMessage id="topBar.profileMenu.billingPlan" />:{' '}
          </strong>
          <FormattedMessage id="topBar.professional" />
        </div>
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.role" />:{' '}
          </strong>
          {user.role || '—'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.email" />:{' '}
          </strong>
          {user.email || '—'}
          <br />
          <strong>
            <FormattedMessage id="topBar.profileMenu.phone" />:{' '}
          </strong>
          {user.phone || '—'}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            // history.push('/home')
          }}
        >
          <i className={`${styles.menuIcon} fe fe-user`} />
          <FormattedMessage id="topBar.profileMenu.editProfile" />
        </a>
      </Menu.Item>
      <Menu.Divider />
      {/* <Menu.Item>
        <a href="#" onClick={logout}>
          <i className={`${styles.menuIcon} fe fe-log-out`} />
          <FormattedMessage id="topBar.profileMenu.logout" />
        </a>
      </Menu.Item> */}
    </Menu>
  )
  return (
    <>
      <div style={{ marginRight: '10px' }}>
        <Dropdown overlay={menu} trigger={['click']} onVisibleChange={addCount}>
          <div className={styles.dropdown}>
            <img src={notificationIcon} width={15} alt="icon" />
            {/* <Avatar
          className={styles.avatar}
          shape="square"
          size="large"
          icon={<UserOutlined />}
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        /> */}
          </div>
        </Dropdown>
      </div>
    </>
  )
}

export default connect(mapStateToProps)(NotificationSection)
