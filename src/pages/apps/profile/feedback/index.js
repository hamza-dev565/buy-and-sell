import React from 'react'
import { Layout, Button } from 'antd'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import sad from './sad.svg'
import style from './feedback.module.scss'

const Feedack = ({ intl }) => {
  const feedbacks = [
    {
      title: `${intl.formatMessage({ id: 'profile.positiveFeedback' })}(0)`,
      desc: intl.formatMessage({ id: 'profile.noPositiveFeed' }),
    },
    {
      title: `${intl.formatMessage({ id: 'profile.positiveFeedback' })}(0)`,
      desc: intl.formatMessage({ id: 'profile.noPositiveFeed' }),
    },
    {
      title: `${intl.formatMessage({ id: 'profile.positiveFeedback' })}(0)`,
      desc: intl.formatMessage({ id: 'profile.noPositiveFeed' }),
    },
    {
      title: `${intl.formatMessage({ id: 'profile.positiveFeedback' })}(0)`,
      desc: intl.formatMessage({ id: 'profile.noPositiveFeed' }),
    },
  ]

  return (
    <div className={style.wraper}>
      <div>
        {feedbacks.map(item => {
          return (
            <div
              style={{ display: 'flex', alignItems: 'start', padding: '10px', marginTop: '20px' }}
            >
              <img src={sad} alt="icon" className="mr-4" style={{ marginTop: '6px' }} />
              <div>
                <p style={{ margin: '0px', fontSize: '18px', color: 'black' }}>{item.title}</p>
                <span>{item.desc}</span>
              </div>
            </div>
          )
        })}

        <div style={{ padding: '10px' }}>
          <Button
            block="true"
            type="primary"
            style={{ color: 'white', borderRadius: '8px', width: '200px' }}
          >
            <span style={{ color: 'white' }}>
              <FormattedMessage id="profile.guidelines" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Feedack)
