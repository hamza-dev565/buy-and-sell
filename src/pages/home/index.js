import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Pagination } from 'antd'
import Catalog from 'components/catalog'
import ProductItems from 'components/productItems'

const mapStateToProps = ({ category, product, dispatch, user }) => ({
  category,
  product,
  dispatch,
  user,
})

const HomePage = ({ category, product, dispatch, user }) => {
  useEffect(() => {
    getAllProducts()
    // dispatch()
  }, [])
  const getAllProducts = () => {
    console.log('hi there')
    dispatch({
      type: 'product/GET_PRODUCTS_BY_CATEGORY',
      payload: { id: -1 },
    })
  }

  return (
    <div>
      <ProductItems type="all" />
    </div>
  )
}

export default connect(mapStateToProps)(HomePage)
