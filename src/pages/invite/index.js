import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Select, Checkbox, Button, Form, Input, InputNumber } from 'antd'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import ImageUploading from 'react-images-uploading'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import PerfectScrollbar from 'react-perfect-scrollbar'

import cam from './camera.svg'

const { Option } = Select

const mapStateToProps = ({ category, dispatch }) => ({
  category,
  dispatch,
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

const SellFromVendor = ({ category, dispatch, intl }) => {
  const [form] = Form.useForm()
  const [images, setImages] = React.useState([])
  const maxNumber = 69

  const onFinish = values => {
    console.log(values)
    dispatch({
      type: 'product/ADD_PRODUCT',
      payload: values,
    })
    onReset()
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit

    setImages(imageList)
  }
  const onReset = () => {
    form.resetFields()
  }

  return (
    <div className="d-flex justify-content-center align-items-start">
      <div style={{ width: '600px', marginTop: '10vw', marginLeft: '12vw' }}>
        <PerfectScrollbar>
          <Form
            {...layout}
            form={form}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['product', 'name']}
              placeholder="sdfsdfsd"
              // label="Post Title"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'invite.friendEmail' }) },
              ]}
            >
              <Input
                style={{ borderRadius: '8px', padding: '6px' }}
                placeholder={intl.formatMessage({ id: 'invite.friendEmail' })}
              />
            </Form.Item>
            {/* <label htmlFor="test">dasd</label> */}

            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                <span style={{ color: 'white' }}>
                  <FormattedMessage id="invite.invite" />
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
