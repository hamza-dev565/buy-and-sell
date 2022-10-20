import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import badge from './badge.svg'
import lock from './lock.svg'
import style from './badge.module.scss'

const Badge = () => {
  return (
    <div className={style.wraper}>
      <div className={style.badgeSec1}>
        <div>
          <h2>
            <FormattedMessage id="badge.pinnedBadge" />{' '}
          </h2>
          <p>
            <FormattedMessage id="badge.noGold" />{' '}
          </p>
          <span>
            <FormattedMessage id="badge.onlyGold" />{' '}
          </span>
        </div>
        <div className={style.badgeIcon}>
          <img src={badge} alt="icon" />
        </div>
      </div>
      <div className={style.badgeSec2}>
        {badgeArray.map(item => {
          return (
            <div className={style.lock}>
              <img src={lock} alt="icon" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Badge
const badgeArray = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  11,
  1,
  1,
  11,
  1,
  1,
  11,
  1,
  1,
  11,
  1,
  1,
  11,
  1,
  1,
  11,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
]
