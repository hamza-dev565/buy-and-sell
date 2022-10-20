import React, { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { Table, Spin } from 'antd'
import { Helmet } from 'react-helmet'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import actions from 'redux/userdata/actions'
import chairIcon from '../images/chair.jpeg'
import ladyIcon from '../images/lady.jpeg'
import blackShoe from '../images/pic1.jpeg'
import whiteShoew from '../images/show1.jpeg'

const mapStateToProps = ({ dispatch, userdataReducer }) => ({
  dispatch,
  userdataReducer,
})

const PurchaseHistory = ({ dispatch, userdataReducer, intl }) => {
  const userData = useSelector(state => state.userReducer)
  console.log('user role', userData.role)

  useEffect(() => {
    dispatch({
      type: actions.GET_ORDERS_FOR_ADMIN,
    })
  }, [])

  const columns = [
    {
      title: intl.formatMessage({ id: 'purchaseHistory.product' }),
      dataIndex: 'name',
      key: 'name',
      render: (text, data) => (
        <div>
          <img
            src={data.images[0].image}
            alt="asd"
            width={20}
            height={20}
            style={{ marginRight: '10px' }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: intl.formatMessage({ id: 'purchaseHistory.price' }),
      dataIndex: 'market_price',
      key: 'age',
    },
    // {
    //   title: 'Date',
    //   dataIndex: 'date',
    //   key: 'address',
    // },

    // {
    //   title: userData.role === 'admin' && 'Situation',
    //   dataIndex: 'Situation',
    //   key: 'situation',
    //   render: (text, data) =>
    //     userData.role === 'admin' && (
    //       <div>
    //         <span
    //           style={{
    //             padding: '6px 15px',
    //             backgroundColor: data.sold === 'Sold' ? '#c6e9c6' : '#ecc3c3',
    //             borderRadius: '8px',
    //             color: data.sold === 'Sold' ? 'green' : 'red',
    //           }}
    //         >
    //           {data.sold}
    //         </span>
    //       </div>
    //     ),
    // },
  ]

  return (
    <Spin size="large" spinning={userdataReducer.loading}>
      <div>
        <Helmet title="Purchase History" />
        {/* <div className="air__utils__heading"> */}
        {/* <strong>Ecommerce: Orders</strong> */}
        {/* </div> */}
        <div className="card">
          <div className="card-header card-header-flex">
            <div className="d-flex flex-column justify-content-center mr-auto">
              <h5 className="mb-0">
                <FormattedMessage id="purchase.latestOrder" />
              </h5>
            </div>
            <div className="d-flex flex-column justify-content-center">
              {/* <a className="btn btn-primary" href="#" onClick={e => e.preventDefault()}>
              <FormattedMessage id="purchase.newOrder" />
            </a> */}
            </div>
          </div>
          <div className="card-body">
            <div className="text-nowrap" style={{ width: '800px', border: '1px solid lightgray' }}>
              <Table columns={columns} dataSource={userdataReducer.adminOrders} showHeader />
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default connect(mapStateToProps)(injectIntl(PurchaseHistory))
