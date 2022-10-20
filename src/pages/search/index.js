import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Select, Checkbox, Button, Form, Input, InputNumber, notification, Spin } from 'antd'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import ImageUploading from 'react-images-uploading'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import PerfectScrollbar from 'react-perfect-scrollbar'
import actions from 'redux/category/actions'
import productActions from 'redux/product/actions'
import ProductItems from 'components/productItems'

import cam from './camera.svg'

const { Option } = Select

const mapStateToProps = ({ category, dispatch, product }) => ({
  category,
  dispatch,
  product,
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

const SellFromVendor = ({ category, dispatch, intl, product }) => {
  const [form] = Form.useForm()
  const [images, setImages] = React.useState([])
  const maxNumber = 1

  useEffect(() => {
    dispatch({
      type: 'product/SET_STATE',
      payload: {
        inImageSearchMode: false,
      },
    })
  }, [])

  const backButton = () => {
    console.log('back')
    dispatch({
      type: 'product/SET_STATE',
      payload: {
        inImageSearchMode: false,
      },
    })
  }

  const onFinish = values => {
    if (!values.product.images) {
      notification.error({
        message: 'Error',
        description: 'Please Select one image for searching!',
      })
      return
    }
    dispatch({
      type: productActions.SEARCH_PRODUCTS_BY_IMAGE,
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

  if (!product.inImageSearchMode) {
    return (
      <Spin size="large" spinning={product.loading}>
        <div className="d-flex justify-content-center align-items-start">
          <div>
            <h5>
              <FormattedMessage id="search.heading" />
            </h5>
          </div>
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
                              <span>0/1</span>
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

                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    <span style={{ color: 'white' }}>
                      <FormattedMessage id="search" />
                    </span>
                  </Button>
                </Form.Item>
              </Form>
            </PerfectScrollbar>
          </div>
        </div>
      </Spin>
    )
  }
  return (
    <div>
      <Button className="mb-2" onClick={backButton}>
        <FormattedMessage id="back" />
      </Button>
      <h4>
        <FormattedMessage id="search.searchResults" />
      </h4>
      <ProductItems type="byImage" />
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(SellFromVendor))
