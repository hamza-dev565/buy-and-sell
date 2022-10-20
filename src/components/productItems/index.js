/* eslint-disable camelcase */
/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import { FormattedMessage } from 'react-intl'
import { connect, useSelector } from 'react-redux'
import Catalog from 'components/catalog'
import img from './images/show1.jpeg'
import pic1 from './images/pic1.jpeg'
import chair from './images/chair.jpeg'
import lady from './images/lady.jpeg'
import Card from './card/index'
import MainCard from './mainCard/index'
import ReviewProduct from './addReview/index'

const mapStateToProps = ({ product, dispatch }) => ({
  product,
  dispatch,
})

const ProductItems = ({ product, dispatch, type }) => {
  const [reviewProdDetails, setReviewProdDetails] = useState({
    id: null,
    price: null,
    description: null,
    fashion: null,
    img: null,
    title: null,
  })

  useEffect(() => {
    dispatch({
      type: 'product/SET_STATE',
      payload: {
        inReviewMode: false,
      },
    })
  }, [])

  const addToFavourite = id => {
    dispatch({
      type: 'product/FAVOURITE',
      payload: { id },
    })
  }

  const reviewAdd = (id, price, description, fashion, img, title) => {
    dispatch({
      type: 'product/SET_STATE',
      payload: {
        inReviewMode: true,
      },
    })
    setReviewProdDetails({ id, price, description, fashion, img, title })
  }

  let products
  if (type === 'all') {
    products = product.all
  } else if (type === 'own') {
    products = product.own
  } else if (type === 'byImage') {
    products = product.searchByImageProducts
  } else {
    products = product.byCategory
  }
  if (products.length === 0) {
    return (
      <Spin size="large" spinning={product.loading}>
        <p>
          <FormattedMessage id="noProductsFound" />
        </p>
      </Spin>
    )
  }
  if (!product.inReviewMode) {
    return (
      <Spin size="large" spinning={product.loading}>
        <div className="row">
          {products.map((item, i) => {
            const { images, name, slug, fashion, description, market_price, title, id, user } = item
            return (
              <div>
                <Card
                  userId={user.id}
                  onReviewAdd={reviewAdd}
                  key={id}
                  id={id}
                  img={item.images.lenght !== 0 ? item.images[0].image : pic1}
                  description={description}
                  price={market_price}
                  // fashion={!fashion ? slug : fashion}
                  title={name}
                  onClick={() => addToFavourite(id)}
                />
              </div>
            )
          })}
        </div>
      </Spin>
    )
  }
  return (
    <ReviewProduct
      id={reviewProdDetails.id}
      img={reviewProdDetails.img}
      fashion={reviewProdDetails.fashion}
      description={reviewProdDetails.description}
      price={reviewProdDetails.price}
      title={reviewProdDetails.title}
    />
  )
}

export default connect(mapStateToProps)(ProductItems)
