import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {RiQuestionAnswerLine} from 'react-icons/ri'
import yellowStar from '../card/card-images/star-fill.svg'
import heart from '../card/card-images/heart.svg'
import greenHeart from '../card/card-images/heart-fill.svg'
import chat from '../card/card-images/chat.svg'
import style from './card.module.scss'

const MainCard = (props) => {
  const { img, fashion, title, description, price, addToFavourites} = props
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openPayment, setPayment] = useState(false)
  return (
    <Link to="/payment">
      <div className={style.wraper}>
        {/* <div className={style.imgSec}>
          <img src={img} alt="pic" className={style.imgTag} />
        </div> */}
        <div className={style.infoWraper}>
          <div className={style.container}>
            <div className={style.sub1}>
              <span>{fashion}</span>
              <h2> <strong style={{fontSize:'1.8vw'}}>{title}</strong></h2>
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
              <h2 style={{ color: '#00dd00', fontSize:'1.8vw'}}>
                <b>${price}</b>
              </h2>
            </div>
            <div className={style.sub2}>
              <div className={style.favouriteSec}>
                <img src={pathname.includes('favorites') ? greenHeart : heart} alt="hear icon" />
              </div>
              <div className={style.chat}>
                Chat <RiQuestionAnswerLine style={{ marginLeft: '10px' }} />
              </div>
              <div className={style.status} style={{fontSize:'0.8vw', color: 'white',  backgroundColor:"#1EB972"}}><strong>Purchase Now</strong></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MainCard
