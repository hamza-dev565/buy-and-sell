import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import actions from 'redux/userdata/actions'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import star from './star-fill.svg'
import style from './review.module.scss'

const mapStateToProps = ({ dispatch, userdataReducer }) => ({
  dispatch,
  userdataReducer,
})

const Review = ({ dispatch, userdataReducer, intl }) => {
  const [toggle, setToggle] = useState()
  const state = { 1: true, 2: false, 3: false }
  const [initStyle, setStyle] = useState(state)
  const handleClick = id => {
    console.log(id)
    Object.keys(initStyle).forEach(key => {
      initStyle[key] = false
    })
    initStyle[id] = true
    setStyle({ ...initStyle })
  }

  const data = [
    { name: intl.formatMessage({ id: 'review.allReviews' }), id: 1 },
    // , { name: 'From Seller',id:2 }, { name: 'From Buyer',id:3 }
  ]

  useEffect(() => {
    dispatch({
      type: actions.GET_MY_REVIEWS,
    })
  }, [])

  const handleKeyDown = () => {}
  return (
    <div>
      <div className={style.main}>
        {data.map((item, index) => {
          // return <div onClick={handleClick}><p> {item.name}</p></div>
          return (
            <div>
              <div
                onClick={() => handleClick(item.id)}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                style={{ 'border-bottom': initStyle[item.id] ? '2px solid #5edda4' : '' }}
              >
                <p> {item.name}</p>
              </div>
            </div>
          )
        })}
      </div>
      {userdataReducer.reviews.map(el => {
        return (
          <div className={style.cardWraper}>
            <div className={style.head}>
              <div className={style.circle}>
                <img
                  style={{ width: '100%', height: '100%', marginBottom: '12px' }}
                  src={el.user.profile_image}
                  alt="abc"
                />
              </div>
              <p>
                {el.user.first_name} {el.user.last_name}
              </p>
              <img src={star} alt="star" className={style.star} />
              <img src={star} alt="star" className={style.star} />
              <img src={star} alt="star" className={style.star} />
              <img src={star} alt="star" className={style.star} />
              <img src={star} alt="star" className={style.star} />
              <span style={{ marginLeft: '5px' }}>{el.rating}</span>
            </div>
            <p>{el.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default connect(mapStateToProps)(injectIntl(Review))
