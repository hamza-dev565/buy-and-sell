import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { connect } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import ProductItems from 'components/productItems'
import Catalog from 'components/catalog'
import fireIcon from './images/fire.svg'
import butterfly from './images/butterfly.png'
import chair from './images/chair.png'

import gift from './images/gift.png'
import helpinghand from './images/helping-hand.png'
import fider from './images/fider.png'
import ne from './images/new.png'
import faq from './images/faq.png'
import add from './images/add-user.png'
import share from './images/share.png'
import football from './images/football.png'
import lap from './images/lap.png'
import orange from './images/orange.png'
import pant from './images/pant.png'
import shirt from './images/shirt.png'
import xbox from './images/xbox.png'
import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const CategoryPage = ({ category, product, dispatch }) => {
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

  return (
    <div style={{ border: '1px solid lightgray', width: '40vw', marginLeft: '20vw', marginTop: '5vw' }}>
      {isCategoryList ? (
        <List
          itemLayout="horizontal"
          // style={}
          dataSource={items}
          renderItem={item => (
            <List.Item
              className={style.cursorPointer}
              style={{fontSize: '1vw'}}
              onClick={() => {
                // setCurrentCategory(item.id)
                // setIsCategoryList(false)
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={item?.image} style={{  marginLeft: '15px', borderRadius: '0px', width:'1.5vw', height: '1.5vw' }} />}
                title={
                  <Link to="item.goto">
                  <div>
                    {item.name}
                    {/* <div className={style.itemAction}>
                      <span />
                    </div> */}
                  </div>
                  </Link>
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

export default connect(mapStateToProps)(CategoryPage)

const items = [
  
  { id: 1, name: 'Get Help', image: helpinghand, goto: "" },
  { id: 2, name: 'Invite Friends', image: add, goto: ""  },
  { id: 3, name: 'My Rewards', image: gift, goto: ""  },
  { id: 4, name: 'Share App', image: share, goto: ""  },
  { id: 5, name: 'what\'s new', image: ne, goto: ""  },
  { id: 6, name: 'FAQ', image: faq, goto: ""  },
  ]
