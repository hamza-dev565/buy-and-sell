import React, { useState } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { Select, Checkbox, Button, Form, Input, InputNumber, notification } from 'antd'
import ImageUploading from 'react-images-uploading'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Avatar from 'react-avatar-edit'

import cam from './camera.svg'

const { Option } = Select

const mapStateToProps = ({ category, dispatch, userdataReducer }) => ({
  category,
  dispatch,
  userdataReducer,
})

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const SellFromVendor = ({ category, dispatch, userdataReducer, intl }) => {
  const [avatarPreview, setAvatarPreview] = useState(`http://${userdataReducer.profile_image}`)
  const [avatarSrc, setAvatarSrc] = useState(null)
  const [form] = Form.useForm()
  const maxNumber = 69

  const onFinish = values => {
    if (avatarPreview === null) {
      // console.log('preview is null')
      notification.error({
        message: 'Avatar image',
        description: 'please choose your avatar image',
      })
      return
    }
    values.avatar = avatarPreview
    if (values.avatar.includes('http')) {
      values.avatar = null
    }
    dispatch({
      type: 'userdata/EDIT_PROFILE',
      payload: values,
    })
    // onReset()
    setAvatarPreview(null)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const onAvatarCrop = preview => {
    setAvatarPreview(preview)
  }
  const onAvatarClose = () => {
    setAvatarPreview(null)
  }
  const onAvatarBeforeFileLoad = elem => {
    console.log('elem.target.files[0].size =-=-=', elem.target.files[0].size / 1024)
    if (elem.target.files[0].size > 1451680) {
      alert('File is too big!')
      elem.target.value = ''
    }
  }
  const onReset = () => {
    form.resetFields()
  }

  return (
    <div className="d-flex justify-content-center align-items-start">
      <div style={{ width: '600px' }}>
        <PerfectScrollbar>
          <Form
            {...layout}
            form={form}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="avatar"
              // label="Images"
              // id="test"
            >
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
            <Form.Item
              name="first_name"
              placeholder="sdfsdfsd"
              // label="Post Title"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'placeholder.firstName' }) },
              ]}
            >
              <Input
                defaultValue={userdataReducer.first_name}
                style={{ borderRadius: '8px', padding: '6px' }}
                placeholder={intl.formatMessage({ id: 'placeholder.firstName' })}
              />
            </Form.Item>

            <Form.Item
              name="last_name"
              placeholder="sdfsdfsd"
              // label="Post Title"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'placeholder.lastName' }) },
              ]}
            >
              <Input
                defaultValue={userdataReducer.last_name}
                style={{ borderRadius: '8px', padding: '6px' }}
                placeholder={intl.formatMessage({ id: 'placeholder.lastName' })}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              placeholder="sdfsdfsd"
              // label="Post Title"
              rules={[{ required: true, message: intl.formatMessage({ id: 'placeholder.phone' }) }]}
            >
              <Input
                defaultValue={userdataReducer.phone}
                style={{ borderRadius: '8px', padding: '6px' }}
                placeholder={intl.formatMessage({ id: 'placeholder.phone' })}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                <span style={{ color: 'white' }}>
                  <FormattedMessage id="placeholder.done" />
                </span>
              </Button>
            </Form.Item>
          </Form>
        </PerfectScrollbar>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(SellFromVendor))
