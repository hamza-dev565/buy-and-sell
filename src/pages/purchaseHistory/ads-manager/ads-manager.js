/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { List, Spin, Form, Button, Input } from 'antd'
import actions from 'redux/userdata/actions'
import { Helmet } from 'react-helmet'
import chairIcon from '../images/chair.jpeg'
import ladyIcon from '../images/lady.jpeg'
import blackShoe from '../images/pic1.jpeg'
import whiteShoew from '../images/show1.jpeg'

import style from './style.module.scss'

import './styles.css'

const mapStateToProps = ({ userdataReducer, dispatch }) => ({
  userdataReducer,
  dispatch,
})

const AdsManager = ({userdataReducer, dispatch, intl}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editId, setEditId] = useState(-1)
  const [form] = Form.useForm()
  const userData = useSelector(state => state.userReducer)
  // console.log(userData.role)

  useEffect(() => {
    dispatch({
      type: actions.GET_PROMOTIONS,
    })
  }, [])

  const onFinishFailed = errorInfo => {
    // console.log(' this why you Failed harry:', errorInfo)
  }

  const onFinish = values => {
    if(!isEditMode){
      console.log(values)
    dispatch({
      type: actions.CREATE_PROMOTION,
      payload: {
        price: values.price,
        description: values.description
      }
    })  
  }else{
    dispatch({
      type: actions.EDIT_PROMOTION,
      payload: {
        price: values.price,
        description: values.description,
        id: editId
      }
    }) 
    setIsEditMode(false)
  }


  onReset()
  }

  const onEditClick = (id, description, price) => {
    form.setFieldsValue({ description, price })
    setEditId(id)
    setIsEditMode(true)
  }

  const onReset = () => {
    form.resetFields()
  }

  const dataSource = [
    {
      name: 'test',
      description: 'Add will run for 10 days',
      price: '$ 10',
     
    },

    {
      name: 'test 2',
      description: 'Add will run for 10 days',
      price: '$ 10',
    },
 
  ]

 

  return (
    <Spin size="large" spinning={userdataReducer.loading}>
    <div>   
      <div className="card">
        <div className="card-body">
            <p
            style={{fontWeight: 'bold'}}
            ><FormattedMessage id="promotion.heading" />
            </p>
            <List
            itemLayout="horizontal"
            dataSource={userdataReducer.promos}
            renderItem={item => (
              <List.Item className={style.cursorPointer}>
                <List.Item.Meta
                  title={
                    <div>
                      <div>
                        <span
                        style={{ color: '#443491', fontSize: '15px', lineHeight: '1.5715', fontWeight: 'bold', marginRight: '5px'}}
                        >
                          $
                          {item.offer_price}
                        </span>
                        {item.description}
                        <span
                        onClick={() => onEditClick(item.id, item.description, item.offer_price)}
                        style={{color: '#1eb972', float: 'right', marginRight: '10px', marginTop: '4px', fontSize: 'medium'}}
                        >
                        <FormattedMessage id="category.edit" />
                        </span>
                      </div>
                      {/* <div className={style.itemAction}>
                        <FormattedMessage id="category.edit" />
                      </div> */}
                    </div>
                  }
                  description=""
                />
              </List.Item>
            )}
          />
        </div>
        <hr />
        <div
        style={{marginLeft: '24px'}}
        >
          <p>
          {isEditMode ? (
            <FormattedMessage id="promotion.editPromo" />
          ) : (
            <FormattedMessage id="promotion.newPromo" />
          )}
          </p>
          <div>
          <Form
            layout="inline"
            form={form}
            hideRequiredMark
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="mb-4"
            // initialValues={{ email: 'demo@sellpixels.com', password: 'demo123' }}
          >
            <Form.Item
              name="price"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'promotion.promoPrice' }) },
              ]}
            >
              <Input
                size="large"
                placeholder={intl.formatMessage({ id: 'promotion.promoPrice' })}
                style={{ borderRadius: '0.5vw', width: '180px' }}
              />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                { required: true, message: intl.formatMessage({ id: 'promotion.promoDescription' }) },
              ]}
            >
              <Input
                size="large"
                placeholder={intl.formatMessage({ id: 'promotion.promoDescription' })}
                style={{ borderRadius: '0.5vw', width: '263px' }}
              />
            </Form.Item>
            <Button
              style={{ width: '150px', borderRadius: '0.5vw' }}
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
        </div>
      </div>
    </div>
    </Spin>
  )
}

export default connect(mapStateToProps)(injectIntl(AdsManager))
