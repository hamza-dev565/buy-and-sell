/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import actions from 'redux/chat/actions'

import { RiQuestionAnswerLine } from 'react-icons/ri'
import { FormattedMessage } from 'react-intl'
import yellowStar from './card-images/star-fill.svg'
import heart from './card-images/heart.svg'
import greenHeart from './card-images/heart-fill.svg'
import chat from './card-images/chat.svg'
import style from './card.module.scss'

const mapStateToProps = ({ dispatch }) => ({
  dispatch,
})

const Card = ({
  dispatch,
  id,
  img,
  fashion,
  title,
  description,
  price,
  onClick,
  onReviewAdd,
  userId,
}) => {
  const { pathname } = useLocation()
  const [openPayment, setPayment] = useState(false)
  const addTo = () => {
    // addToFavourites()
  }

  const addReview = () => {
    onReviewAdd(id, price, description, fashion, img, title)
  }

  const onChatClick = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const myId = user.user.pk
    if (userId === myId) {
      return
    }
    dispatch({
      type: actions.CREATE_ROOM,
      payload: {
        productUserId: userId,
        productId: id,
      },
    })
  }

  return (
    // <Link to="/payment">
    <div className={style.wraper}>
      <div className={style.imgSec}>
        <Link to="/payment">
          <img src={img} alt="pic" className={style.imgTag} />
        </Link>
      </div>
      <div className={style.infoWraper}>
        <div className={style.container}>
          <div className={style.sub1}>
            <Link to="/payment">
              <span>{fashion}</span>
              <h2>
                {' '}
                <strong style={{ fontSize: '1.8vw' }}>{title}</strong>
              </h2>
              <span>{description}</span>
              <div className={style.starSection}>
                <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
                <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />

                <span style={{ marginLeft: '10px' }}>
                  <b>5.0</b>
                </span>
              </div>
              <h2 style={{ color: '#00dd00', fontSize: '1.8vw' }}>
                <b>${price}</b>
              </h2>
            </Link>
          </div>
          <div className={style.sub2}>
            <div className={style.favouriteSec} onClick={onClick}>
              <img src={pathname.includes('favorites') ? greenHeart : heart} alt="hear icon" />
            </div>
            <div
              onClick={() => addReview()}
              className={style.status}
              style={{
                fontSize: '0.8vw',
                color: '#40C387',
                width: '80px',
                padding: '0.5vw 0.5vw 0.5vw 0.5vw',
                backgroundColor: "rgba('#00ff00', '1')",
                cursor: 'pointer',
              }}
            >
              <strong>
                <FormattedMessage id="product.review" />
              </strong>
            </div>
            <div
              onClick={onChatClick}
              className={style.chat}
              style={{ width: '136px', cursor: 'pointer' }}
            >
              <FormattedMessage id="sideBar.general.chat" />{' '}
              <RiQuestionAnswerLine style={{ marginLeft: '10px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  )
}

export default connect(mapStateToProps)(Card)
