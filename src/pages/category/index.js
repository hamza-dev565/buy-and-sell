import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import { FormattedMessage } from 'react-intl';
import ProductItems from 'components/productItems'
import actions from 'redux/category/actions'

import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const CategoryPage = ({ category, product, dispatch }) => {
  const [currentCategory, setCurrentCategory] = useState(-1)
  const [isCategoryList, setIsCategoryList] = useState(true)
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORIES,
    })
  }, [])

  const backButton = () => {
    dispatch({
        type: 'product/SET_STATE',
        payload: {inReviewMode: false,},
      })
}

  useEffect(() => {
    getProductDataByCategory()
  }, [currentCategory])

  const getProductDataByCategory = () => {
    dispatch({
      type: 'product/GET_PRODUCTS_BY_CATEGORY',
      payload: { id: currentCategory },
    })
  }

  if (isCategoryList) {
    return (
      <div
        style={{
          border: '1px solid lightgray',
          width: '40vw',
          marginLeft: '20vw',
          marginTop: '1vw',
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={category.items}
          renderItem={item => (
            <List.Item
              className={style.cursorPointer}
              onClick={() => {
                setCurrentCategory(item.id)
                setCategoryName(item.name)
                setIsCategoryList(false)
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={item?.icon}
                    style={{
                      marginLeft: '15px',
                      borderRadius: '0px',
                      width: '1.5vw',
                      height: '1.5vw',
                    }}
                  />
                }
                title={
                  <div>
                    {item.name}
                    <div className={style.itemAction}>
                      <span />
                    </div>
                  </div>
                }
                description=""
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
  const test = product.inReviewMode? 
  '': 
  <div>
  <Button className="mb-2" onClick={() => setIsCategoryList(true)}>
  <FormattedMessage id="back" />
  </Button>
  <h3>{categoryName}</h3>
  </div>
  return (
    <div>
      {test}
      <ProductItems type="byCategory" />
    </div>
  )
}

export default connect(mapStateToProps)(CategoryPage)
