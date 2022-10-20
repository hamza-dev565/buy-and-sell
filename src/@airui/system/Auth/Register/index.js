import React, { useState } from 'react'

import Avatar from 'react-avatar-edit'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from 'redux/user/actions'
import { Country, City } from 'country-state-city'

import Translations from '@airui/layout/Translations'

import PhoneInput from 'react-phone-number-input'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { notification, Input, Button, Form, Checkbox, Select, Avatar as Avatar2 } from 'antd'
import 'react-phone-number-input/style.css'
import style from '../style.module.scss'
import fb from './fb.png'
import google from './google.png'
import nk from './north-korea.png'
import j from './japan.png'
import cf from './chinese-flag.png'
import uk from './united-kingdom.png'
import miniLogo from './miniLogo.jpeg'

const mapStateToProps = ({ user, dispatch }) => ({ user, dispatch })

const Register = ({ dispatch, user, intl }) => {
  const [country, setCountry] = useState({})
  const [stepForRegister, setStepForRegister] = useState(1)
  const [formValues, setFormValues] = useState({})
  const [avatarSrc, setAvatarSrc] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)

  const onAvatarClose = () => {
    setAvatarPreview(null)
  }

  const onAvatarCrop = preview => {
    setAvatarPreview(preview)
  }

  const onAvatarBeforeFileLoad = elem => {
    console.log('elem.target.files[0].size =-=-=', elem.target.files[0].size / 1024)
    if (elem.target.files[0].size > 1451680) {
      alert('File is too big!')
      elem.target.value = ''
    }
  }

  const onCountryChange = value => {
    setCountry(JSON.parse(value))
  }

  const onFinish = values => {
    // console.log('values here =-=-=', values)
    setFormValues({ ...formValues, ...values })
    if (stepForRegister === 3) {
      if (avatarPreview === null) {
        // console.log('preview is null')
        notification.error({
          message: 'Avatar image',
          description: intl.formatMessage({ id: 'signup.pleaseChooseAvatar' }),
        })
        return
      }
      formValues.avatar = avatarPreview
      formValues.country = JSON.parse(formValues.country).name
      formValues.region = JSON.parse(formValues.region).name
      // return
      dispatch({
        type: actions.REGISTER,
        payload: formValues,
      })
    }
    // if (stepForRegister === 1 && values.password !== values.confirmPassword) {
    //   notification.error({
    //     message: 'Password dismatch',
    //     description: 'please confirm the password again',
    //   })
    //   return
    // }
    setStepForRegister(stepForRegister + 1)
  }

  const onFinishFailed = errorInfo => {
    // console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '89vh' }}>
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
              <FormattedMessage id="signUp.alreadyAccount" />
            </span>
            <Link to="/auth/login" className="kit__utils__link font-size-16">
              <FormattedMessage id="signIn.signIn" />
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={` ${style.container}`} style={{ width: '500px' }}>
            <div className="text-dark font-size-32 mb-3">
              {stepForRegister === 1 && (
                <strong>
                  <FormattedMessage id="signUp.getStarted" />
                </strong>
              )}
              {stepForRegister === 2 && (
                <strong>
                  <FormattedMessage id="signup.lastStep" />
                </strong>
              )}
            </div>
            <div className="mb-4">
              {stepForRegister === 1 && (
                <p className="font-size-15 mb-1 .text-secondary">
                  <FormattedMessage id="signUp.fillCredentials" />
                </p>
              )}
              {stepForRegister === 2 && (
                <p>
                  <FormattedMessage id="signup.selectLanguage" />
                </p>
              )}
              {stepForRegister === 3 && (
                <p>
                  <FormattedMessage id="signup.pleaseChooseAvatar" />
                </p>
              )}
            </div>
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mb-4"
            >
              {stepForRegister === 1 && (
                <>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: intl.formatMessage({ id: 'login.inputEmail' }) },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder={intl.formatMessage({ id: 'topBar.profileMenu.email' })}
                      style={{ borderRadius: '0.5vw' }}
                    />
                  </Form.Item>
                  {/* <strong>
                    <h6
                      style={{
                        color: '#4dd371',
                        fontSize: '2vh',
                        marginTop: '0vw',
                        marginBottom: '1vh',
                      }}
                    >
                      <strong>
                        <a>Use Mobile Number</a>
                      </strong>
                    </h6>
                  </strong> */}
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({ id: 'signUp.inputUserName' }),
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder={intl.formatMessage({ id: 'signUp.inputUserName' })}
                      style={{ borderRadius: '0.5vw' }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({ id: 'signUp.inputPassword' }),
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder={intl.formatMessage({ id: 'signUp.inputPassword' })}
                      style={{ borderRadius: '0.5vw' }}
                    />
                  </Form.Item>
                  {/* <Form.Item
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your confirm password' }]}
                  >
                    <Input.Password size="large" placeholder="Confirm Password" />
                  </Form.Item> */}
                  {/* <Form.Item name="country" rules={[{ required: true, message: 'Please select your country' }]} style={{backgroundColor:'white', borderRadius:'10vw'}}>
                    <Select size="large" placeholder="Country" dropdownStyle={{borderRadius:'10vw', backgroundColor:'whtie'}} bordered={false}> */}
                  <Form.Item
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({ id: 'signup.selctCountry' }),
                      },
                    ]}
                    style={{}}
                  >
                    <Select
                      size="large"
                      placeholder={intl.formatMessage({ id: 'signup.country' })}
                      style={{ backgroundColor: '#EBEEEF' }}
                      bordered={false}
                      onChange={onCountryChange}
                    >
                      {Country.getAllCountries().map((el, index) => {
                        return (
                          <Select.Option value={JSON.stringify(el)} id={index}>
                            {el.name}
                          </Select.Option>
                        )
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="region"
                    rules={[
                      { required: true, message: intl.formatMessage({ id: 'signup.selectCity' }) },
                    ]}
                    style={{}}
                  >
                    <Select
                      size="large"
                      placeholder={intl.formatMessage({ id: 'signup.city' })}
                      style={{ backgroundColor: '#EBEEEF' }}
                      bordered={false}
                    >
                      {City.getCitiesOfCountry(country.isoCode).map((el, index) => {
                        return (
                          <Select.Option value={JSON.stringify(el)} id={index}>
                            {el.name}
                          </Select.Option>
                        )
                      })}

                      {/* <Select.Option value="ny">New York
                      </Select.Option>
                      <Select.Option value="tx"> Texas
                      </Select.Option>
                      <Select.Option value="ida"> Idoho
                      </Select.Option>
                      <Select.Option value="on"> Ontario
                      </Select.Option> */}
                    </Select>
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>
                      <FormattedMessage id="signUp.agreement" />
                    </Checkbox>
                  </Form.Item>
                </>
              )}
              {stepForRegister === 2 && (
                <>
                  {/* <Form.Item name="phoneNumber">
                    <PhoneInput
                      className="font-size-18"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </Form.Item>
                  <Form.Item
                    name="zipcode"
                    rules={[{ required: true, message: 'Please input your zip code' }]}
                  >
                    <Input size="large" placeholder="Zip code" />
                  </Form.Item> */}
                  <Form.Item
                    name="language"
                    style={{ width: '8vw', backgroundColor: '#111111', borderRadius: '10vw' }}
                  >
                    <Select
                      size="large"
                      placeholder={intl.formatMessage({ id: 'signup.selectLanguage' })}
                      style={{ borderRadius: '10vw', backgroundColor: '#00ff00' }}
                    >
                      <Select.Option value="en">
                        <Avatar2
                          src={uk}
                          style={{
                            marginRight: '1vw',
                            alignSelf: 'right',
                            marginLeft: '0vw',
                            borderRadius: '0px',
                            width: '1.5vw',
                            height: '1.5vw',
                          }}
                        />{' '}
                        EN{' '}
                      </Select.Option>
                      <Select.Option value="jp">
                        <Avatar2
                          src={j}
                          style={{
                            marginRight: '1vw',
                            alignSelf: 'right',
                            marginLeft: '0vw',
                            borderRadius: '0px',
                            width: '1.5vw',
                            height: '1.5vw',
                          }}
                        />{' '}
                        JP
                      </Select.Option>
                      <Select.Option value="ch">
                        <Avatar2
                          src={cf}
                          style={{
                            marginRight: '1vw',
                            alignSelf: 'right',
                            marginLeft: '0vw',
                            borderRadius: '0px',
                            width: '1.5vw',
                            height: '1.5vw',
                          }}
                        />{' '}
                        CH
                      </Select.Option>
                      <Select.Option value="ko">
                        <Avatar2
                          src={nk}
                          style={{
                            marginRight: '1vw',
                            alignSelf: 'right',
                            marginLeft: '0vw',
                            borderRadius: '0px',
                            width: '1.5vw',
                            height: '1.5vw',
                          }}
                        />{' '}
                        KO
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </>
              )}
              {stepForRegister === 3 && (
                <>
                  <Form.Item name="avatar">
                    <Avatar
                      height={295}
                      onCrop={onAvatarCrop}
                      onClose={onAvatarClose}
                      onBeforeFileLoad={onAvatarBeforeFileLoad}
                      src={avatarSrc}
                    />
                    {avatarPreview && (
                      <div className="text-center mt-2">
                        <img src={avatarPreview} alt="Preview" />
                      </div>
                    )}
                  </Form.Item>
                </>
              )}
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="text-center w-100"
                loading={user.loading}
              >
                <strong>
                  {stepForRegister === 2
                    ? intl.formatMessage({ id: 'getHelp.submit' })
                    : intl.formatMessage({ id: 'signIn.signUp' })}
                </strong>
              </Button>
              <div style={{ marginTop: '3px' }}>
                <span>
                  <FormattedMessage id="signUp.secondAgreement" />
                </span>
              </div>

              {stepForRegister === 1 && (
                <>
                  {/* <Button
                    // type="primary"
                    size="large"
                    className="text-center w-100 btn "
                    htmlType="submit"
                    style={{
                      margin: '10px 0px',
                      border: '0.5px solid lightgray',
                      borderRadius: '7px',
                    }}
                    loading={user.loading}
                  >
                    <strong>Sign in with Google</strong>
                    <Avatar2
                      src={google}
                      style={{
                        marginRight: '0vw',
                        alignSelf: 'right',
                        marginLeft: '2.5vw',
                        borderRadius: '0px',
                        width: '1.5vw',
                        height: '1.5vw',
                      }}
                    />
                  </Button> */}

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
                    <Avatar2
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

                  {/* <Button
                    // type="primary"
                    size="large"
                    style={{ border: '0.5px solid lightgray', borderRadius: '7px' }}
                    className="text-center w-100   "
                    htmlType="submit"
                    loading={user.loading}
                  >
                    <strong>Sign in with Facebook</strong>
                    <Avatar2
                      src={fb}
                      style={{
                        marginRight: '0vw',
                        alignSelf: 'right',
                        marginLeft: '2.5vw',
                        borderRadius: '0px',
                        width: '1.5vw',
                        height: '1.5vw',
                      }}
                    />
                  </Button> */}
                  <Button
                    // type="primary"
                    size="large"
                    style={{ border: '0.5px solid lightgray', borderRadius: '7px' }}
                    className=" text-center w-100   "
                    htmlType="submit"
                    loading={user.loading}
                  >
                    <Avatar2
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
                </>
              )}
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
        <div className="d-flex justify-content-end p-2">
          {/* <span style={{ color: 'green' }}>SKIP</span> */}
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100%' }}
        >
          <img src={miniLogo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(Register))
