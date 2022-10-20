import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import ProductItems from 'components/productItems'
import { Link, useLocation } from 'react-router-dom'

import faq1 from './images/faq (1).png'

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
    {
      id: 1,
      name: intl.formatMessage({ id: 'faq.howMany' }),
      ans: intl.formatMessage({ id: 'faq.basicPlanAns' }),
      image: faq1,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: 'faq.basicPlan' }),
      ans: intl.formatMessage({ id: 'faq.basicPlanAns' }),
      image: faq1,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: 'faq.profits' }),
      ans: intl.formatMessage({ id: 'faq.profitAns' }),
      image: faq1,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: 'faq.moreThanFive' }),
      ans: intl.formatMessage({ id: 'faq.moreThanFiveAns' }),
      image: faq1,
    },
    {
      id: 5,
      name: intl.formatMessage({ id: 'faq.changeProfile' }),
      ans: intl.formatMessage({ id: 'faq.changeProfileAns' }),
      image: faq1,
    },
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
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    {item.ans}
                    {/* <div className={style.itemAction}>
                      <span />
                    </div> */}
                  </div>
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
