import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
// import { useLocation } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Avatar, Badge } from 'antd'
import bell from '../bell.svg'
import styles from './style.module.scss'

const mapStateToProps = ({ dispatch, userdataReducer }) => ({ dispatch, userdataReducer })

const ProfileMenu = ({ dispatch, userdataReducer }) => {
  const [count, setCount] = useState(7)
  const history = useHistory()

  const logout = e => {
    e.preventDefault()
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  const addCount = () => {
    setCount(count + 1)
  }

  const menu = (
    <Menu>
      <div className={styles.wraper}>
        <div
          className="d-flex align-items-center justify-content-between "
          style={{ padding: '10px', borderBottom: '1px solid lightgray' }}
        >
          <div className="d-flex align-items-center">
            <div className={styles.circle}>
              <img
                style={{ width: '100%', height: '100%' }}
                src={`http://${userdataReducer.profile_image}`}
                alt="asd"
              />
            </div>
            <div>
              <h4>
                {userdataReducer.first_name === 'NA' ? 'first_name' : userdataReducer.first_name}{' '}
                {userdataReducer.last_name === 'NA' ? 'last_name' : userdataReducer.last_name}
              </h4>
            </div>
          </div>
          {/* <div>
              <h5 style={{ color: '#279abf' }}>Change</h5>
            </div> */}
        </div>

        <div
          style={{
            padding: '10px',
            borderBottom: '1px solid lightgray',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <Link to="/profile"> */}
          <span>
            <FormattedMessage id="topbar.profile" />
          </span>
          {/* </Link> */}

          {/* <Menu.Item>
            <div>     */}
          <a>
            <Link to="/editprofile">
              <h5>
                <FormattedMessage id="topBar.profileMenu.editProfile" />
              </h5>
            </Link>
          </a>
          {/* </div>
          </Menu.Item> */}

          <Link to="/settings">
            <h5>
              <FormattedMessage id="sideBar.utilities.settings" />
            </h5>
          </Link>
        </div>

        {/* <div
            style={{
              padding: '10px',
              borderBottom: '1px solid lightgray',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Companies</span>
            <h5>Top Solutions</h5>
          </div> */}

        <div
          style={{
            padding: '10px',
            borderBottom: '1px solid lightgray',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <Link to="\favourites"> */}
          <span>
            <FormattedMessage id="topBar.actions" />
          </span>
          {/* </Link> */}

          <Link to="/help">
            <h5>
              <FormattedMessage id="topbar.getHelp" />
            </h5>
          </Link>

          <Link to="/share">
            <h5>
              <FormattedMessage id="topbar.share" />
            </h5>
          </Link>
          <Link to="/auth/login">
            <h5>
              <FormattedMessage id="topBar.profileMenu.logout" />
            </h5>
          </Link>
        </div>

        <div
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        />
      </div>
    </Menu>
  )
  return (
    <Dropdown overlay={menu}>
      <div className={styles.dropdown}>
        <Avatar
          className={styles.avatar}
          shape="square"
          size="large"
          src={`http://${userdataReducer.profile_image}`}
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(ProfileMenu)
