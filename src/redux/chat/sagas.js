/* eslint-disable */
import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import * as ChatApi from 'api/chat'
import actions from './actions'

export function* CREATE_ROOM({ payload: { productId, productUserId } }) {
  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user.user.pk

  yield put({
    type: 'chat/SET_STATE',
    payload: {
      loading: true,
      currentRoom: `${userId}_${productUserId}`,
    },
  })

  const res = yield call(ChatApi.createRoom, { productUserId, productId })

  history.push('/chat')

  yield put({
    type: 'chat/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* GET_MY_ROOMS() {
  yield put({
    type: 'chat/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const rooms = yield call(ChatApi.getMyRooms)
  console.log('this is rooms', rooms)

  yield put({
    type: 'chat/SET_STATE',
    payload: {
      myRooms: rooms,
      currentRoom: rooms[0].name,
    },
  })

  yield put({
    type: 'chat/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_ROOM, CREATE_ROOM),
    // takeEvery(actions.GET_MY_ROOMS, GET_MY_ROOMS)
  ])
}
