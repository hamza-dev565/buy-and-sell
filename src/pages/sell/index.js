import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Select, Checkbox, Button, Form, Input, InputNumber } from 'antd'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import ImageUploading from 'react-images-uploading'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import PerfectScrollbar from 'react-perfect-scrollbar'
import actions from 'redux/category/actions'
import productActions from 'redux/product/actions'

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

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORIES,
    })
  }, [])

  const onFinish = values => {
    console.log(values)
    dispatch({
      type: productActions.ADD_PRODUCT,
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
              name={['product', 'images']}
              // label="Images"
              // id="test"
            >
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <>
                    <div className="upload__image-wrapper d-flex justify-content-center ">
                      <div>
                        <Button
                          onClick={onImageUpload}
                          {...dragProps}
                          style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            backgroundColor: 'lightgray',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                          }}
                        >
                          <img src={cam} alt="icon" width={47} />
                          <span>0/10</span>
                        </Button>
                      </div>
                      &nbsp;
                      {/* <Button onClick={onImageRemoveAll}>Remove all images</Button> */}
                      <div className="mt-2">
                        {imageList.map((image, index) => (
                          <div key={Math.random()} className="image-item d-inline-block ml-2">
                            <img
                              src={image.data_url}
                              alt=""
                              width="100"
                              height="100"
                              style={{ objectFit: 'cover' }}
                            />
                            <div className="image-item__btn-wrapper p-2">
                              <Button
                                onClick={() => onImageUpdate(index)}
                                icon={<PlusCircleOutlined />}
                              />
                              <Button
                                style={{ float: 'right' }}
                                onClick={() => onImageRemove(index)}
                                icon={<MinusCircleOutlined />}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </ImageUploading>
            </Form.Item>
            <Form.Item
              name={['product', 'name']}
              placeholder="sdfsdfsd"
              // label="Post Title"
              rules={[{ required: true, message: intl.formatMessage({ id: 'sell.productName' }) }]}
            >
              <Input
                style={{ borderRadius: '8px', padding: '6px' }}
                placeholder={intl.formatMessage({ id: 'sell.productName' })}
              />
            </Form.Item>
            {/* <label htmlFor="test">dasd</label> */}

            <Form.Item
              name={['product', 'categories']}
              // label="Category"
              rules={[{ required: true, message: intl.formatMessage({ id: 'sell.category' }) }]}
              style={{ borderRadius: '8px', padding: '0px' }}
            >
              <Select
                size="x-large"
                placeholder={intl.formatMessage({ id: 'sell.category' })}
                style={{ backgroundColor: '#EBEEEF' }}
                bordered={false}
              >
                {category.items.map((el, index) => {
                  return (
                    <Select.Option value={el.id} id={index}>
                      <p style={{ color: 'black', paddingLeft: '0vw' }}> {el.name} </p>
                    </Select.Option>
                  )
                })}
              </Select>
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
            <Form.Item
              name={['product', 'market_price']}
              // label="Price"
              placeholder={intl.formatMessage({ id: 'sell.price' })}
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'sell.price' }),
                  type: 'number',
                  min: 0,
                  max: 10000,
                },
              ]}
            >
              <InputNumber
                style={{ borderRadius: '8px', padding: '4px', width: '100%' }}
                placeholder={intl.formatMessage({ id: 'sell.price' })}
              />
            </Form.Item>
            <Form.Item
              {...tailFormItemLayout}
              name={['product', 'negotiable']}
              valuePropName="checked"
              style={{ marginLeft: '-300px' }}
            >
              <div>
                <Checkbox style={{ marginRight: '30px' }}>
                  <FormattedMessage id="sell.negotiable" />
                </Checkbox>
              </div>
            </Form.Item>
            <Form.Item
              name={['product', 'description']}
              // label="Description"
            >
              <Input.TextArea
                showCount
                maxLength={100}
                placeholder={intl.formatMessage({ id: 'sell.description' })}
                style={{ borderRadius: '8px', padding: '6px', height: '200px' }}
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
