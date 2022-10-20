/* eslint-disable camelcase */
import React from 'react'
import { Spin } from 'antd'
import { connect, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import Catalog from 'components/catalog'
import img from './images/show1.jpeg'
import pic1 from './images/pic1.jpeg'
import chair from './images/chair.jpeg'
import lady from './images/lady.jpeg'
import Card from './card/index'
import MainCard from './mainCard/index'

const mapStateToProps = ({ product }) => ({
  product,
})

const ProductItems = ({ product }) => {
  const reviewAdd = id => {
    console.log(id, 'in dfdf')
  }

  if (product.favourite.length === 0) {
    return (
      <Spin size="large" spinning={product.loading}>
        <p>
          <FormattedMessage id="noProductsFound" />
        </p>
      </Spin>
    )
  }
  return (
    <Spin size="large" spinning={product.loading}>
      <div className="row">
        {[...product.favourite].map(item => {
          const { images, name, slug, fashion, description, market_price, title, id } = item.product
          // console.log('item =-=-=', item.product.images)
          // console.log('item =-=-=2', item.product.images.length)
          return (
            <div>
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
