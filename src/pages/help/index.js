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
      <div
      // style={{ width: '800px', marginLeft: '10vw' }}
      >
        <PerfectScrollbar>
          <Form
            {...layout}
            form={form}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['product', 'images']}
              // label="Images"
              // id="test"
            />

            <Form.Item
              name={['product', 'name']}
              placeholder="sdfsdfsd"
              // label="Post Title"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'getHelp.typeQuestion' }) },
              ]}
            >
              <Input
                style={{ borderRadius: '8px', padding: '6px', height: '4vw', width: '50vw' }}
                placeholder={intl.formatMessage({ id: 'getHelp.typeQuestion' })}
              />
            </Form.Item>
            {/* <label htmlFor="test">dasd</label> */}

            <Form.Item
              name={['product', 'categories']}
              // label="Category"
              rules={[{ required: true, message: intl.formatMessage({ id: 'getHelp.email' }) }]}
              // style={{ borderRadius: '8px', padding: '5px', width: '60vw' }}
            >
              <Input
                style={{ borderRadius: '8px', padding: '6px', width: '50vw' }}
                placeholder={intl.formatMessage({ id: 'getHelp.email' })}
              />
              {/* <Select
              mode="multiple"
              style={{ padding: '5px !important' }}
              placeholder="select cateimport { PerfectScrollbar } from 'react-perfect-scrollbar';
gory"
            >
              {category.items &&
                category.items.map((item, index) => (
                  <Option key={Math.random()} value={item.name}>
                    {item.name}
                  </Option>
                ))}
            </Select> */}
            </Form.Item>
            {/* <Form.Item
              name={['product', 'market_price']}
              // label="Price"
              placeholder="price"
              rules={[
                {
                  required: true,
                  message: 'Please enter price',
                  type: 'number',
                  min: 0,
                  max: 10000,
                },
              ]}
            >
              <InputNumber
                style={{ borderRadius: '8px', padding: '4px', width: '100%' }}
                placeholder="Enter Price"
              />
            </Form.Item>
            <Form.Item
              {...tailFormItemLayout}
              name={['product', 'negotiable']}
              valuePropName="checked"
              style={{ marginLeft: '-300px' }}
            >
              <div>
                <Checkbox style={{ marginRight: '30px' }}>Negotiable?</Checkbox>
              </div>
            </Form.Item>
            <Form.Item
              name={['product', 'description']}
              // label="Description"
            >
              <Input.TextArea
                showCount
                maxLength={100}
                placeholder="Description"
                style={{ borderRadius: '8px', padding: '6px', height: '200px' }}
              />
            </Form.Item> */}
            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
              <Button type="primary" htmlType="submit" style={{ width: '10vw' }}>
                <span style={{ color: 'white' }}>
                  <FormattedMessage id="getHelp.submit" />
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
