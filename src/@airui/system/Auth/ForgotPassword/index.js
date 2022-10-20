import React from 'react'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import miniLogo from './miniLogo.jpeg'
import style from '../style.module.scss'

const ForgotPassword = () => {
  const onFinish = values => {
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr ', height: '89vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={` ${style.container}`} style={{ width: '500px' }}>
          <div className="text-dark font-size-32 mb-3">Reset Password</div>
          <Form
            layout="vertical"
            hideRequiredMark
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="mb-4"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your e-mail address' }]}
            >
              <Input size="large" placeholder="Email Address" />
            </Form.Item>
            <Button type="primary" htmlType="submit" size="large" className="text-center w-100">
              <strong>Reset my password</strong>
            </Button>
          </Form>
          <Link to="/auth/login" className="kit__utils__link font-size-16">
            <i className="fe fe-arrow-left mr-1 align-middle" />
            Go to Sign in
          </Link>
        </div>
      </div>
      <div style={{ background: '#154b4d' }} className="d-flex flex-column">
        <div className="d-flex justify-content-end p-2">
          <span style={{ color: 'green' }}>SKIP</span>
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

export default ForgotPassword
