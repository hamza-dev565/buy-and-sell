/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { RiQuestionAnswerLine } from 'react-icons/ri'
import { FormattedMessage } from 'react-intl'
import yellowStar from './card-images/star-fill.svg'
import heart from './card-images/heart.svg'
import greenHeart from './card-images/heart-fill.svg'
import chat from './card-images/chat.svg'
import style from './card.module.scss'

const Card = props => {
  const { id, img, fashion, title, description, price, onClick, onReviewAdd } = props
  const { pathname } = useLocation()
  const [openPayment, setPayment] = useState(false)
  const addTo = () => {
    // addToFavourites()
  }

  const addReview = () => {
    onReviewAdd(id)
  }

  return (
    // <Link to="/payment">
    <div className={style.wraper}>
      <div className={style.imgSec}>
          <img src={img} alt="pic" className={style.imgTag} />
      </div>
      <div className={style.infoWraper}>
        <div className={style.container}>
          <div className={style.sub1}>
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
                width: '80px',
                color: '#40C387',
                padding: '0.5vw 0.5vw 0.5vw 0.5vw',
                backgroundColor: "rgba('#00ff00', '1')",
                curson: 'pointer',
              }}
            >
              <strong>
                <FormattedMessage id="product.review" />
              </strong>
            </div>
            <div style={{ width: '136px' }} className={style.chat}>
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

export default Card
