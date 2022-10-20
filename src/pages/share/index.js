import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Link, useLocation } from 'react-router-dom'
import ProductItems from 'components/productItems'

import share from './images/share.png'
import fb from './images/facebook.png'
import tw from './images/twitter.png'
import em from './images/email.png'
import wa from './images/whatsapp.png'
import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const CategoryPage = ({ category, product, dispatch, intl }) => {
  const [currentCategory, setCurrentCategory] = useState(-1)
  const [isCategoryList, setIsCategoryList] = useState(true)
  useEffect(() => {
    getProductDataByCategory()
  }, [currentCategory])
  const getProductDataByCategory = () => {
    dispatch({
      type: 'product/GET_PRODUCTS_BY_CATEGORY',
      payload: { id: currentCategory },
    })
  }

  const items = [
    { id: 1, name: intl.formatMessage({ id: 'share.copyLink' }), image: share },
    { id: 2, name: intl.formatMessage({ id: 'share.shareEmail' }), image: em },
    { id: 3, name: intl.formatMessage({ id: 'share.shareWhatsApp' }), image: wa },
    { id: 4, name: intl.formatMessage({ id: 'share.shareFacebook' }), image: fb },
    { id: 5, name: intl.formatMessage({ id: 'share.shareTwitter' }), image: tw },
    // { id: 6, name: 'FAQ', image: faq, goto: "/faq"  },
  ]

  return (
    <div
      style={{ border: '1px solid lightgray', width: '40vw', marginLeft: '20vw', marginTop: '5vw' }}
    >
      {isCategoryList ? (
        <List
          itemLayout="horizontal"
          // style={}
          dataSource={items}
          renderItem={item => (
            <List.Item
              className={style.cursorPointer}
              style={{ fontSize: '1vw' }}
              onClick={() => {
                // setCurrentCategory(item.id)
                // setIsCategoryList(false)
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={item?.image}
                    style={{
                      marginLeft: '15px',
                      borderRadius: '0px',
                      width: '1.5vw',
                      height: '1.5vw',
                    }}
                  />
                }
                title={
                  <Link to={item.goto}>
                    <div>
                      {item.name}
                      {/* <div className={style.itemAction}>
                      <span />
                    </div> */}
                    </div>
                  </Link>
                }
                description=""
              />
            </List.Item>
          )}
        />
      ) : (
        <div>
          <Button className="mb-2" onClick={() => setIsCategoryList(true)}>
            Back
          </Button>
          <ProductItems />
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(CategoryPage))
