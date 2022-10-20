/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { useSelector, connect } from 'react-redux'
import { Table, Modal } from 'antd'
import actions from 'redux/userlist/actions'
import { Helmet } from 'react-helmet'
import chairIcon from '../images/chair.jpeg'
import ladyIcon from '../images/lady.jpeg'
import blackShoe from '../images/pic1.jpeg'
import whiteShoew from '../images/show1.jpeg'
const { confirm } = Modal

const mapStateToProps = ({ userlistReducer, dispatch }) => ({
  dispatch,
  userlistReducer,
})

const UserList = ({ userlistReducer, dispatch, intl }) => {
  const userData = useSelector(state => state.userlistReducer)

  const onDeleteUser = data => {
    confirm({
      title: intl.formatMessage({ id: 'delete.userConfirmation' }),
      icon: <ExclamationCircleOutlined />,
      content: `${data.email}`,

      onOk() {
        let userList = userlistReducer.userList
        dispatch({
          type: actions.DELETE_USER,
          payload: {
            id: data.id,
            userList: userList,
          },
        })
        console.log('OK')
      },

      onCancel() {
        console.log('Cancel')
      },
    })
  }

  useEffect(() => {
    dispatch({
      type: actions.GET_USERS,
    })
  }, [])

  const dataSource = [
    {
      id: 3,
      first_name: 'hamza',
      last_name: 'naseer',
      email: 'hamza@gmail.com',
    },
    {
      id: 4,
      first_name: 'muhammad',
      last_name: 'haris',
      email: 'haris@gmail.com',
    },
  ]

  const columns = [
    // {
    //   title: 'First Name',
    //   dataIndex: 'first_name',
    //   key: 'name',
    //   render: (text, data) => (
    //     <div className="d-flex">
    //       <span>{text}</span>
    //     </div>
    //   ),
    // },
    {
      title: intl.formatMessage({ id: 'userlist.firstName' }),
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: intl.formatMessage({ id: 'userlist.lastName' }),
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: intl.formatMessage({ id: 'userlist.email' }),
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: intl.formatMessage({ id: 'userlist.action' }),
      dataIndex: 'Situation',
      key: 'id',
      render: (text, data) => (
        <div onClick={() => onDeleteUser(data)}>
          <span
            style={{
              cursor: 'pointer',
              padding: '6px 20px',
              backgroundColor: '#24ab24',
              borderRadius: '8px',
              color: 'white',
            }}
          >
            <FormattedMessage id="user.deleteUser" />
          </span>
        </div>
      ),
    },
  ]

  return (
    <div>
      <Helmet title="Purchase History" />
      {/* <div className="air__utils__heading">
        <strong>Ecommerce: Orders</strong>
      </div> */}
      <div className="card">
        {/* <div className="card-header card-header-flex">
          <div className="d-flex flex-column justify-content-center mr-auto">
            <h5 className="mb-0">Latest Orders</h5>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <a className="btn btn-primary" href="#" onClick={e => e.preventDefault()}>
              New Order
            </a>
          </div>
        </div> */}
        <div className="card-body">
          <div className="text-nowrap" style={{ width: '800px', border: '1px solid lightgray' }}>
            <Table columns={columns} dataSource={userlistReducer.userList} showHeader />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(UserList))
