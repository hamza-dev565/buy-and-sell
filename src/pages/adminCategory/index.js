/* eslint-disable */

import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar, Upload, Input, Form, notification } from 'antd'
import ProductItems from 'components/productItems'
import actions from 'redux/category/actions'
import { PlusOutlined } from '@ant-design/icons'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import style from './style.module.scss'
import './style.css'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const CategoryPage = ({ category, product, dispatch, intl }) => {
  const [currentCategory, setCurrentCategory] = useState(-1)
  const [isCategoryList, setIsCategoryList] = useState(true)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editId, setEditId] = useState(-1)
  const [fileList, setFileList] = useState([])
  const [form] = Form.useForm()

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)

  const handlePreview = async file => {
    console.log('preview')
  }

  const onFinishFailed = errorInfo => {
    // console.log(' this why you Failed harry:', errorInfo)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onEdit = (id, name) => {
    form.setFieldsValue({ name })
    setEditId(id)
    setIsEditMode(true)
  }

  const onFinish = values => {
    if (!isEditMode) {
      const data = {
        name: values.name,
        icon: fileList[0].thumbUrl,
      }

      if (fileList.length === 0) {
        notification.error({
          message: 'Category Image',
          description: 'please choose an image',
        })
        return
      }
      dispatch({
        type: actions.NEW_CATEGORY,
        payload: { data, categories: category.items },
      })
    } else {
      dispatch({
        type: actions.EDIT_CATEGORY,
        payload: { name: values.name, id: editId, categories: category.items },
      })
      setIsEditMode(false)
      setEditId(-1)
      form.setFieldsValue({ name: '' })
    }

    setFileList([])
    onReset()
  }

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORIES,
    })
  }, [])

  useEffect(() => {
    setIsEditMode(false)
    setEditId(-1)
    form.setFieldsValue({ name: '' })
    getProductDataByCategory()
  }, [currentCategory])

  const getProductDataByCategory = () => {
    dispatch({
      type: 'product/GET_PRODUCTS_BY_CATEGORY',
      payload: { id: currentCategory },
    })
  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  )

  if (isCategoryList) {
    return (
      <>
        <p>
          <FormattedMessage id="category.allCategories" />
        </p>
        <div
          style={{
            border: '1px solid lightgray',
            width: '40vw',
            marginTop: '1vw',
          }}
        >
          <List
            itemLayout="horizontal"
            dataSource={category.items}
            renderItem={item => (
              <List.Item className={style.cursorPointer}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      onClick={() => {
                        setCurrentCategory(item.id)
                        setIsCategoryList(false)
                      }}
                      src={item?.icon}
                      style={{
                        marginLeft: '15px',
                        borderRadius: '0px',
                        width: '1.5vw',
                        height: '1.5vw',
                      }}
                    />
                  }
                  title={
                    <div>
                      <div
                        onClick={() => {
                          setCurrentCategory(item.id)
                          setIsCategoryList(false)
                        }}
                      >
                        {item.name}
                      </div>
                      <div onClick={() => onEdit(item.id, item.name)} className={style.itemAction}>
                        <FormattedMessage id="category.edit" />
                      </div>
                    </div>
                  }
                  description=""
                />
              </List.Item>
            )}
          />
        </div>
        <p style={{ marginTop: '4px' }}>
          {isEditMode ? (
            <FormattedMessage id="category.editCategory" />
          ) : (
            <FormattedMessage id="category.new" />
          )}
        </p>
        <div>
          <div>
            {isEditMode ? (
              ''
            ) : (
              <Upload
                action=""
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                onPreview={handlePreview}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            )}
          </div>
          <Form
            layout="vertical"
            form={form}
            hideRequiredMark
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="mb-4"
            // initialValues={{ email: 'demo@sellpixels.com', password: 'demo123' }}
          >
            <Form.Item
              name="name"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'category.categoryName' }) },
              ]}
            >
              <Input
                size="large"
                placeholder={intl.formatMessage({ id: 'category.name' })}
                style={{ borderRadius: '0.5vw', width: '263px' }}
              />
            </Form.Item>
            <Button
              style={{ width: '200px', borderRadius: '0.5vw' }}
              type="primary"
              htmlType="submit"
              size="large"
              className="text-center"
            >
              <strong>
                {isEditMode ? (
                  <FormattedMessage id="category.edit" />
                ) : (
                  <FormattedMessage id="category.create" />
                )}
              </strong>
            </Button>
          </Form>
        </div>
      </>
    )
  }
  return (
    <div>
      <Button className="mb-2" onClick={() => setIsCategoryList(true)}>
        <FormattedMessage id="back" />
      </Button>
      <ProductItems />
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(CategoryPage))
