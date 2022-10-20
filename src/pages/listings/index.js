import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl';
import { Tabs, Button, Spin, Pagination, List, Avatar } from 'antd'
import ProductItems from 'components/productItems'
import actions from 'redux/product/actions'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'
import Catalog from 'components/catalog'
import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const { TabPane } = Tabs

const Listings = ({ category, product, dispatch }) => {
  const [productType, setProductType] = useState('AV')

  const handleChange = activeKey => {
    setProductType(activeKey)
  }

  useEffect(() => {
    getMyProducts(productType)
  }, [productType])

  const getMyProducts = status => {
    dispatch({
      type: actions.GET_OWN_PRODUCTS_BY_STATUS,
      payload: { status },
    })
  }

  return (
    <div>
      <Tabs defaultActiveKey="AV" onChange={handleChange}>
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              <FormattedMessage id="active" />
            </span>
          }
          key="AV"
        >
          <ProductItems type="own" />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              <FormattedMessage id="sold" />
            </span>
          }
          key="SO"
        >
          <ProductItems type="own" />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              <FormattedMessage id="Pending" />
            </span>
          }
          key="PN"
        >
          <ProductItems type="own" />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default connect(mapStateToProps)(Listings)
