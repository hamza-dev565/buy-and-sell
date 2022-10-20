import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl';
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import ProductItems from 'components/productItems2'
import Catalog from 'components/catalog'
import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const Favorite = ({ category, product, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'product/GET_FAVOURITE',
    })
  }, [])

  return (
    <div>
      <h4><FormattedMessage id="sideBar.general.Favorites" /></h4>
      <ProductItems />
    </div>
  )
}

export default connect(mapStateToProps)(Favorite)
