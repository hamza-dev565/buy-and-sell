import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import * as firebase from 'services/firebase'
import * as jwt from 'services/jwt'
import LoginUserAction from 'redux/users/action'
import * as UserApi from 'api/user'
import actions from './actions'

const mapAuthProviders = {
  firebase: {
    login: firebase.login,
    register: firebase.register,
    currentAccount: firebase.currentAccount,
    logout: firebase.logout,
  },
  jwt: {
    login: jwt.login,
    register: jwt.register,
    currentAccount: jwt.currentAccount,
    logout: jwt.logout,
  },
}

export function* LOGIN({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // const { authProvider: autProviderName } = yield select(state => state.settings)
  const success = yield call(UserApi.loginUser, payload)
  console.log(success)

  if (
    success &&
    success.other &&
    (success.other[0] === 'User not found with provided credentials.' ||
      success.other[0] === 'Unable to log in with provided credentials.')
  ) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.error({
      message: 'Error',
      description: 'Wrong Credentials Provided',
    })
  } else if (success && success.message !== 'Failed to fetch') {
    localStorage.setItem('user', JSON.stringify(success))
    yield put(LoginUserAction(success.user))
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    yield put({
      type: 'userdata/GET_PROFILE',
    })
    if (success.user.is_superuser) {
      yield history.push('/user-list')
    } else {
      yield history.push('/main-page')
    }
    notification.success({
      message: 'Logged In',
      description: 'You have successfully logged in!',
    })
  } else {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.error({
      message: 'Error',
      description: 'Error Occured. Please try again later',
    })
  }
}

export function* REGISTER({ payload }) {
  // const { email, password, confirmPassword, username, language, zipcode, profile_image } = payload
  console.log('payload =-=-=-=-=-=-=-=-=-', payload)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // if( password !== confirmPassword ){
  //   notification.error({
  //     message: 'Password Dismatch',
  //     description: 'please repeat your password correctly',
  //   })
  //   yield put({
  //     type: 'user/SET_STATE',
  //     payload: {
  //       loading: false,
  //     },
  //   })
  //   return;
  // }
  // const { authProvider } = yield select(state => state.settings)
  const success = yield call(UserApi.registerUser, payload)
  if (success !== 'Request failed with status code 400') {
    // yield put({
    //   type: 'user/LOAD_CURRENT_ACCOUNT',
    // })
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    yield history.push('/auth/login')
    notification.success({
      message: 'Succesful Registered',
      description: 'You have successfully registered! Please login',
    })
  } else {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
      },
    })
    yield history.push('/auth/register')

    notification.error({
      message: 'Error',
      description: 'Error occured while registering!',
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // const { authProvider } = yield select(state => state.settings)
  // const response = yield call(mapAuthProviders[authProvider].currentAccount)
  // if (response) {
  //   const { id, email, name } = response
  //   yield put({
  //     type: 'user/SET_STATE',
  //     payload: {
  //       id,
  //       name,
  //       email,
  //       authorized: true,
  //     },
  //   })
  //   // const { id, email, name, avatar, role } = response
  //   // yield put({
  //   //   type: 'user/SET_STATE',
  //   //   payload: {
  //   //     id,
  //   //     name,
  //   //     email,
  //   //     avatar,
  //   //     role,
  //   //     authorized: true,
  //   //   },
  //   // })
  // }
  const userJSON = localStorage.getItem('user')
  if (userJSON && userJSON !== '{}') {
    const userData = JSON.parse(userJSON)
    yield put(
      LoginUserAction({
        role: userData.user.is_superuser ? 'admin' : 'user',
        is_superuser: userData.user.is_superuser,
      }),
    )

    yield put({
      type: 'userdata/GET_PROFILE',
    })

    if (userData.user.is_superuser) {
      yield history.push('/user-list')
    } else {
      yield history.push('/main-page')
    }
  } else {
    localStorage.removeItem('user')
    yield history.push('/auth/login')
  }

  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  const { authProvider } = yield select(state => state.settings)
  yield call(mapAuthProviders[authProvider].logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.REGISTER, REGISTER),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
