/* eslint-disable */
import React from 'react'
import { Spin } from 'antd'
import { connect, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import Catalog from 'components/catalog'
import pic1 from './images/pic1.jpeg'
import Card from './card/index'

const mapStateToProps = ({ product, userdataReducer }) => ({
  product,
  userdataReducer
})

const ProductItems = ({ product, userdataReducer, onOrderAdd }) => {
  const reviewAdd = id => {
  }

  const createOrder = (id) => {
    onOrderAdd(id)
  }

  if (product.favourite.all === 0) {
    return (
      <Spin size="large" spinning={userdataReducer.loading}>
        <p>
          <FormattedMessage id="noProductsFound" />
        </p>
      </Spin>
    )
  }
  return (
    <Spin size="large" spinning={userdataReducer.loading}>
      <div className="row">
        {[...product.all].map(item => {
          const { images, name, slug, fashion, description, market_price, title, id } = item
          // console.log('item =-=-=', item.product.images)
          // console.log('item =-=-=2', item.product.images.length)
          return (
            <div
            onClick={() => createOrder(id)}
            >
              <Card
                onReviewAdd={reviewAdd}
                key={id}
                id={id}
                img={images.length > 0 ? images[0].image : pic1}
                description={description}
                price={market_price}
                // fashion={!fashion ? slug : fashion}
                title={name}
              />
            </div>
          )
        })}
      </div>
    </Spin>
  )
}

export default connect(mapStateToProps)(ProductItems)
