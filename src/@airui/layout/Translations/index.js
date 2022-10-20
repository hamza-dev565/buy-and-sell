import React, { useState, useEffect } from 'react'

import { Select, Avatar as Avatar2, Form } from 'antd'

import { connect } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'

// import nk from '../../@airui/layout/Footer/north-korea.png'
import nk from '../Footer/north-korea.png'

import j from '../Footer/japan.png'
import cf from '../Footer/chinese-flag.png'
import uk from '../Footer/united-kingdom.png'
import sk from '../Footer/south-korea-flag.png'

const mapStateToProps = ({ dispatch, settings }) => ({
  dispatch,
  settings,
})

const Translations = ({ dispatch, settings }) => {
  const [value2, setValue] = useState('en-US')

  const handleChange = e => {
    console.log(e)
    setValue(e)
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'locale',
        value: e,
      },
    })
  }

  return (
    <Form>
      <Form.Item>
        <Select
          value={settings.locale}
          onChange={handleChange}
          size="large"
          placeholder="Select Language"
          style={{
            borderRadius: '10vw',
            backgroundColor: '#00ff00',
          }}
        >
          <Select.Option value="en-US">
            <Avatar2
              src={uk}
              style={{
                marginRight: '1vw',
                alignSelf: 'right',
                marginLeft: '0vw',
                borderRadius: '0px',
                width: '1.5vw',
                height: '1.5vw',
              }}
            />{' '}
            EN{' '}
          </Select.Option>
          <Select.Option value="ja-JP">
            <Avatar2
              src={j}
              style={{
                marginRight: '1vw',
                alignSelf: 'right',
                marginLeft: '0vw',
                borderRadius: '0px',
                width: '1.5vw',
                height: '1.5vw',
              }}
            />{' '}
            JP
          </Select.Option>
          <Select.Option value="zh-CN">
            <Avatar2
              src={cf}
              style={{
                marginRight: '1vw',
                alignSelf: 'right',
                marginLeft: '0vw',
                borderRadius: '0px',
                width: '1.5vw',
                height: '1.5vw',
              }}
            />{' '}
            CH
          </Select.Option>
          <Select.Option value="ko-KR">
            <Avatar2
              src={sk}
              style={{
                marginRight: '1vw',
                alignSelf: 'right',
                marginLeft: '0vw',
                borderRadius: '0px',
                width: '1.5vw',
                height: '1.5vw',
              }}
            />{' '}
            KO
          </Select.Option>
        </Select>
      </Form.Item>
    </Form>
  )
}
export default connect(mapStateToProps)(Translations)
