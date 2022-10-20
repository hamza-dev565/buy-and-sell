/* eslint-disable */

import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Tooltip, Spin, notification } from 'antd'
import PerfectScrollbar from 'react-perfect-scrollbar'
import agent from 'api/agent'
import apiUrls from 'api/apiUrls'
import { connect, useSelector } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import axios from 'axios'
import actions from 'redux/chat/actions'
import dialogs from './data.json'
import shareIcon from './share-fill.svg'
import dotsIcon from './dots.svg'
import shoeIcon from './show1.jpeg'
import style from './style.module.scss'
import './chat.css'

const Chat = require('twilio-chat')

const mapStateToProps = ({ chatReducer, dispatch }) => ({
  chatReducer,
  dispatch,
})

const baseUrl = `${process.env.REACT_APP_PUBLIC_API_URL}`

const getToken = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const config = {
    headers: { Authorization: `Bearer ${user.access_token}` },
  }
  const response = await axios.get(`${baseUrl}/twilio-token`, config)
  const { data } = response
  console.log(data, ' token data')
  return data.token
}

const getMyRooms = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk

    const { data } = await agent.get(`${apiUrls.CREATE_ROOM}/${userId}`)
    console.log(data, 'rooms')

    return { data, status: true }
  } catch (error) {
    return { data: error.message, status: false }
  }
}

const ChatPage = ({ intl, chatReducer, dispatch }) => {
  const [channel, setChannel] = useState()
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentRoom, setCurrentRoom] = useState('')
  const [myRooms, setMyRooms] = useState([])
  const [initialRender, setIntitialRender] = useState(true)
  const [messages, setMessages] = useState([])
  const [profileImageUrl, setProfileImageUrl] = useState('')
  const [chatTitle, setChatTitle] = useState('')
  const { name, position, dialog, avatar, lastSeen } = dialogs[activeIndex]

  const myuser = JSON.parse(localStorage.getItem('user'))
  const myuserId = `${myuser.user.pk}`

  useEffect(() => {
    let token = ''
    dispatch({
      type: actions.SET_STATE,
      payload: {
        loading: true,
      },
    })

    async function fetchToken() {
      const rooms = await getMyRooms()
      if (!rooms.status) {
        return
      }
      setMyRooms(rooms.data)
      if (rooms.length !== 0) {
        if (initialRender) {
          setCurrentRoom(rooms.data[0].name)
          setProfileImageUrl(rooms.data[0].joined_by.profile_image)
          setChatTitle(rooms.data[0].joined_by.first_name)
        }

        try {
          token = await getToken()
        } catch (error) {
          console.log(error)
          throw new Error('unable to get token, please reload this page')
        }

        console.log('token => ', token)
        try {
          const client = await Chat.Client.create(token)

          client.on('tokenAboutToExpire', async () => {
            token = await getToken()
            client.updateToken(token)
          })

          client.on('tokenExpired', async () => {
            token = await getToken()
            client.updateToken(token)
          })

          client.on('channelJoined', async channelnew => {
            // getting list of all messages since this is an existing channel
            const messagesn = await channelnew.getMessages()
            console.log(messagesn.items, 'messages')
            setMessages(messagesn.items)
          })

          const handleMessage = message => {
            console.log('new message, ', message)
            if (message.state) {
              console.log('old message ', messages)
              setMessages([...messages, message])
            }
          }

          const joinChannel = async channeln => {
            if (channeln.channelState.status !== 'joined') {
              await channeln.join()
            }
            channeln.on('messageAdded', handleMessage)
          }

          console.log(currentRoom, 'current')
          try {
            setIntitialRender(false)
            const channelVar = await client.getChannelByUniqueName(currentRoom)
            console.log('channel var ', channelVar)
            await joinChannel(channelVar)

            setChannel(channelVar)
            dispatch({
              type: actions.SET_STATE,
              payload: {
                loading: false,
              },
            })
          } catch (error) {
            dispatch({
              type: actions.SET_STATE,
              payload: {
                loading: false,
              },
            })
            console.log('error in room join ', error)
          }
        } catch (error) {
          dispatch({
            type: actions.SET_STATE,
            payload: {
              loading: false,
            },
          })
          console.log('client error ', error)
          notification.error({
            message: 'Error',
            description: 'Error occured while connecting to twilio',
          })
        }
      }
    }
    fetchToken()
  }, [currentRoom])

  const sendMessage = () => {
    const haris = document.getElementsByClassName('form-control')[0]
    let messageText = haris.value
    if (messageText) {
      channel.sendMessage(messageText)
    }
    haris.value = ''
  }

  const changeDialog = (e, index, roomName, profileImage, chatTitle) => {
    console.log(index, roomName)
    e.preventDefault()
    setActiveIndex(index)
    setCurrentRoom(roomName)
    setProfileImageUrl(profileImage)
    setChatTitle(chatTitle)

    // dispatch({
    //   type: actions.SET_STATE,
    //   payload: {
    //     currentRoom: roomName
    // }})
  }

  return (
    <Spin size="large" spinning={chatReducer.loading}>
      <div>
        <Helmet title="Messaging" />
        <div className={style.TotalChatDiv}>
          <span>
            <FormattedMessage id="chat.moreChats" /> (90)
          </span>
        </div>
        <div className="row">
          <div className="col-12 col-md-3" style={{ paddingRight: '0px' }}>
            <div className={style.dialogs}>
              <PerfectScrollbar>
                {myRooms.map((item, index) => (
                  <a
                    href="#"
                    onClick={e =>
                      changeDialog(
                        e,
                        index,
                        item.name,
                        item.joined_by.profile_image,
                        item.joined_by.first_name,
                      )
                    }
                    key={item.name}
                    className={`${style.item} ${
                      index === activeIndex ? style.current : ''
                    } d-flex flex-nowrap align-items-center`}
                  >
                    <div
                      className="kit__utils__avatar kit__utils__avatar--size46 mr-3 flex-shrink-0"
                      style={{ borderRadius: '50%' }}
                    >
                      <img src={item.joined_by.profile_image} alt={item.joined_by.first_name} />
                    </div>
                    <div className={`${style.info} flex-grow-1`}>
                      <div className="text-dark font-size-18 font-weight-bold text-truncate">
                        {item.joined_by.first_name === 'NA'
                          ? item.joined_by.email
                          : `${item.joined_by.first_name} ${item.joined_by.last_name}`}
                      </div>
                    </div>
                  </a>
                ))}
              </PerfectScrollbar>
            </div>
          </div>
          <div className="col-12 col-md-9" style={{ paddingLeft: '0px' }}>
            <div
              className="card"
              style={{ height: '670px', width: '100%', marginLeft: '0px', marginRight: '0px' }}
            >
              <div className="card-header card-header-flex align-items-center">
                <div className="d-flex  justify-content-center mr-auto">
                  <div>
                    <img
                      src={profileImageUrl}
                      alt="aasd"
                      style={{ borderRadius: '50%', marginRight: '20px' }}
                      width={45}
                      height={45}
                    />
                  </div>
                  <div>
                    <h5 className="mb-0 mr-2 font-size-18">{chatTitle}</h5>
                  </div>
                </div>
                <div>
                  <Tooltip placement="top" title="options">
                    <img src={dotsIcon} alt="fe fe-trash" />
                  </Tooltip>
                </div>
              </div>
              {/* <div className={style.offerBtn}>
              <div className={style.sec1}>
                <img
                  src={shoeIcon}
                  alt="icon"
                  width={40}
                  height={40}
                  style={{ marginRight: '15px' }}
                />
                <div className="d-flex flex-column">
                  <span className={style.info}>Nike Shoe Limited 24</span>
                  <span className={style.price}>$1,299</span>
                </div>
              </div>
              <div className={style.sec2}>
                <button type="button" className={style.makeOfferBtn}>
                  <FormattedMessage id="chat.makeOffer" />
                </button>
                <span>
                  {' '}
                  <FormattedMessage id="chat.viewSeller" />
                </span>
              </div>
            </div> */}
              <div className="card-body" style={{ height: '600px' }}>
                <div>
                  <PerfectScrollbar
                  className='test'
                  >
                    <div className="d-flex flex-column justify-content-end">
                      {messages.map(message => (
                        <div
                          key={Math.random()}
                          className={`${style.message} ${
                            message.state.author !== myuserId ? style.answer : ''
                          }`}
                        >
                          <div
                            className={style.messageContent}
                            style={{
                              backgroundColor: message.state.author !== myuserId ? '#5151ff' : '',
                              color: message.state.author !== myuserId ? 'white' : 'black',
                            }}
                          >
                            <div>{message.state.body}</div>
                            <div className="text-gray-4 font-size-10 d-flex justify-content-end  text-uppercase">
                              {message.time}
                            </div>
                          </div>
                          {message.state.author !== myuserId && (
                            <div className={`${style.messageAvatar} kit__utils__avatar`}>
                              <img
                                src={profileImageUrl}
                                alt={chatTitle}
                                style={{ borderRadius: '50%' }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </PerfectScrollbar>
                </div>
              </div>
              <div
                style={{ borderTop: '1px solid lightgray', marginTop: '20px' }}
                className={style.sendSmsWraper}
              >
                <div className={style.inputWraper}>
                  <img src={shareIcon} alt="icon" style={{ margin: '0px 10px' }} />
                  <input
                    style={{ border: 'none' }}
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: 'chat.startTyping' })}
                  />
                </div>
                <div className="input-group-append">
                  <div
                    onClick={sendMessage}
                    style={{
                      transform: 'rotate(45deg)',
                      marginRight: '35px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <i className="fe fe-send align-middle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default connect(mapStateToProps)(injectIntl(ChatPage))
