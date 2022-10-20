import React from 'react'
import { connect } from 'react-redux'

import { Link, useHistory } from 'react-router-dom'
import LoginUserAction from 'redux/users/action'
import actions from 'redux/user/actions'
import { Input, Button, Radio, Form, Tooltip, Avatar } from 'antd'
import Translations from '@airui/layout/Translations'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import { loginUser } from 'api/user'

import style from '../style.module.scss'
import loginStyle from './login.module.scss'
import miniLogo from './miniLogo.jpeg'
import fb from './fb.png'
import google from './google.png'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
})

const Login = ({ dispatch, user, authProvider, intl }) => {
  const onFinish = values => {
    dispatch({
      type: actions.LOGIN,
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    // console.log(' this why you Failed harry:', errorInfo)
  }

  const changeAuthProvider = value => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'authProvider',
        value,
      },
    })
  }

  return (
    <>
      <div className={loginStyle.wraper}>
        <div className="d-flex flex-column justify-content-between p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                className="logoIconSize"
                src=" resources/images/logo.png"
                alt="logo"
                width={200}
                height={55}
              />
            </div>
            <div>
              <span className="mr-2">
                <FormattedMessage id="signIn.dontHaveAccount" />
              </span>
              <Link to="/auth/register" className="kit__utils__link font-size-16">
                <FormattedMessage id="signIn.signUp" />
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={` ${style.container}`} style={{ width: '500px' }}>
              <div className="text-dark font-size-32 mb-3">
                {' '}
                <strong>
                  <FormattedMessage id="signIn.welcome" />
                </strong>
              </div>
              <div className="mb-4">
                <FormattedMessage id="signIn.fillCredentials" />
              </div>
              <Form
                layout="vertical"
                hideRequiredMark
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="mb-4"
                // initialValues={{ email: 'demo@sellpixels.com', password: 'demo123' }}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: intl.formatMessage({ id: 'login.inputEmail' }) },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder={intl.formatMessage({ id: 'userlist.email' })}
                    style={{ borderRadius: '0.5vw' }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: intl.formatMessage({ id: 'signUp.inputPassword' }) },
                  ]}
                >
                  <Input.Password
                    size="large"
                    type="password"
                    placeholder={intl.formatMessage({ id: 'login.password' })}
                    style={{ borderRadius: '0.5vw' }}
                  />
                </Form.Item>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <input type="Checkbox" style={{ marginRight: '10px' }} />
                    <span>
                      <FormattedMessage id="signIn.saveInfo" />
                    </span>
                  </div>
                  <Link to="/auth/forgot-password" className="kit__utils__link font-size-16">
                    <FormattedMessage id="signIn.forgotPassword" />
                  </Link>
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="text-center w-100 btn btn-success"
                  htmlType="submit"
                  style={{ borderRadius: '0.5vw' }}
                  loading={user.loading}
                >
                  <strong>
                    <FormattedMessage id="signIn.signIn" />
                  </strong>
                </Button>

                <Button
                  // type="primary"
                  size="large"
                  className=" text-center w-100 btn "
                  htmlType="submit"
                  style={{
                    margin: '10px 0px',
                    border: '0.5px solid lightgray',
                    borderRadius: '7px',
                  }}
                  loading={user.loading}
                >
                  <Avatar
                    src={google}
                    style={{
                      marginRight: '1vw',
                      alignSelf: 'right',
                      marginLeft: '0vw',
                      borderRadius: '0px',
                      width: '1.5vw',
                      height: '1.5vw',
                    }}
                  />
                  <strong>
                    <FormattedMessage id="signup.Google" />
                  </strong>
                </Button>
                <Button
                  // type="primary"
                  size="large"
                  style={{ border: '0.5px solid lightgray', borderRadius: '7px' }}
                  className=" text-center w-100   "
                  htmlType="submit"
                  loading={user.loading}
                >
                  <Avatar
                    src={fb}
                    style={{
                      marginRight: '1vw',
                      alignSelf: 'right',
                      marginLeft: '0vw',
                      borderRadius: '0px',
                      width: '1.5vw',
                      height: '1.5vw',
                    }}
                  />
                  <strong style={{ marginRight: '0vw', alignSelf: 'left', marginLeft: '0vw' }}>
                    <FormattedMessage id="signup.Facebook" />
                  </strong>
                </Button>
              </Form>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', 'margin-right': '10px' }}>
            <>
              <Translations />
            </>
          </div>
          <div>@ 2022 All Rights Reserved</div>
        </div>
        <div style={{ background: '#154b4d' }} className="d-flex flex-column">
          {/* <div className="d-flex justify-content-end p-2">
            <span style={{ color: 'green' }}>SKIP</span>
          </div> */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100%' }}
          >
            <img src={miniLogo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(mapStateToProps)(injectIntl(Login))
