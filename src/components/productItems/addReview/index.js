/* eslint-disable camelcase */
/* eslint-disable */
import React, { useState } from 'react'
import { Spin, Form, Input, Button } from 'antd'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { connect, useSelector } from 'react-redux'
import actions from 'redux/product/actions'
import yellowStar from '../card/card-images/star-fill.svg'
import heart from '../card/card-images/heart.svg'
import greenHeart from '../card/card-images/heart-fill.svg'
import style from './card.module.scss'

const mapStateToProps = ({ product, dispatch }) => ({
    product,
    dispatch,
})

const ReviewProduct = ({ product, dispatch, img, fashion, description, price, title, id, intl }) => {
    const [form] = Form.useForm()

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      }


    const onFinish = values => {
        dispatch({
            type: actions.ADD_REVIEW,
            payload: { id, review: values.review },
          })
    }

    const backButton = () => {
        dispatch({
            type: 'product/SET_STATE',
            payload: {inReviewMode: false,},
          })
    }
      

    return (
        <Spin size="large" spinning={product.loading}>
            <Button className="mb-2" onClick={backButton}>
                <FormattedMessage id="back" />
            </Button>
            <div className="row">
                <div>

                    <div className={style.wraper}>
                        <div className={style.imgSec}>
                                <img src={img} alt="pic" className={style.imgTag} />
                        </div>
                        <div className={style.infoWraper}>
                            <div className={style.container}>
                                <div className={style.sub1}>
                                        <span>{fashion}</span>
                                        <h2>
                                            {' '}
                                            <strong style={{ fontSize: '1.8vw' }}>{title}</strong>
                                        </h2>
                                        <span>{description}</span>
                                        <div className={style.starSection}>
                                            <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                                            <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                                            <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                                            <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                                            <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />

                                            <span style={{ marginLeft: '10px' }}>
                                                <b>5.0</b>
                                            </span>
                                        </div>
                                        <h2 style={{ color: '#00dd00', fontSize: '1.8vw' }}>
                                            <b>${price}</b>
                                        </h2>
                                </div>
                                <div className={style.sub2}>
                                    <div className={style.favouriteSec}>
                                        <img src={heart} alt="hear icon" />
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Form
                    {...layout}
                    form={form}
                    name="nest-messages"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="review"
                        placeholder={intl.formatMessage({ id: 'review.reviewMessage' })}
                        // label="Post Title"
                        rules={[{ required: true, message: intl.formatMessage({ id: 'review.reviewMessage' }) }]}
                    >
                        <Input
                            style={{ borderRadius: '8px', padding: '6px' }}
                            placeholder={intl.formatMessage({ id: 'review.reviewMessage' })}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 4 }}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        <span style={{ color: 'white' }}>
                        <FormattedMessage id="placeholder.done" />
                        </span>
                    </Button>
                    </Form.Item>
                </Form>
                </div>
        </Spin>
    )
}

export default connect(mapStateToProps)(injectIntl(ReviewProduct))
