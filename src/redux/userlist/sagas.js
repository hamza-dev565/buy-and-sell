import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import LoginUserAction from 'redux/users/action'
import * as UserApi from 'api/user'
import actions from './actions'

export function* GET_USERS() {
  yield put({
    type: 'userlist/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(UserApi.getUsers)

  if (success) {
    yield put({
      type: 'userlist/SET_STATE',
      payload: {
        userList: success,
      },
    })
  } else {
    notification.error({
      message: 'Error',
      description: 'Error occured while getting users list!',
    })
  }

  yield put({
    type: 'userlist/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* DELETE_USER({ payload: { id, userList } }) {
  yield put({
    type: 'userlist/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(UserApi.deleteUser, id)

  if (success) {
    userList = userList.filter(el => {
      return el.id !== id
    })
    yield put({
      type: 'userlist/SET_STATE',
      payload: {
        userList,
      },
    })
  } else {
    notification.error({
      message: 'Error',
      description: 'Error occured while getting users list!',
    })
  }

  yield put({
    type: 'userlist/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* DELETE_MY_ACCOUNT(){
  yield put({
    type: 'userlist/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const userJSON = localStorage.getItem('user')
  if (userJSON) {
    const userData = JSON.parse(userJSON)
    const success = yield call(UserApi.deleteUser, userData.user.pk)
    if (success) {
      notification.success({
        message: 'Success',
        description: 'Your account has been deleted successfully!',
      })
      yield history.push('/auth/login')
    } else {
      notification.error({
        message: 'Error',
        description: 'Error occured deleting your account!',
      })
    }
  }
  yield put({
    type: 'userlist/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_USERS, GET_USERS), 
    takeEvery(actions.DELETE_USER, DELETE_USER),
    takeEvery(actions.DELETE_MY_ACCOUNT, DELETE_MY_ACCOUNT)
  ])
}
