/* eslint-disable */
import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import LoginUserAction from 'redux/users/action'
import * as UserApi from 'api/user'
import actions from './actions'

export function* GET_PROFILE() {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const res = yield call(UserApi.getProfile)

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      ...res,
      loading: false,
    },
  })

  // yield put({
  //   type: 'user/SET_STATE',
  //   payload: {
  //     first_name: res.first_name,
  //     profile_image: res.profile_image,
  //     phone: res.phone,
  //     language: res.language,
  //     is_active: res.is_active,
  //     last_name: res.last_name,
  //     id: res.id,
  //     account_type: res.account_type,
  //     date_joined: res.date_joined,
  //     loading: false,
  //     authorized: true
  //   },
  // })
}

export function* EDIT_PROFILE({ payload }) {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const res = yield call(UserApi.editProfile, payload)
  console.log(res)
  // yield put({
  //   type: 'user/SET_STATE',
  //   payload: {
  //     first_name: res.first_name,
  //     profile_image: res.profile_image,
  //     phone: res.phone,
  //     last_name: res.last_name,
  //   },
  // })

  yield history.push('/apps/profile')
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: false,
    },
  })
  notification.success({
    message: 'Profile Updated',
    description: 'Your Profile Details have been updated succesfully',
  })
}

export function* GET_MY_ORDERS() {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const res = yield call(UserApi.getOrders)
  if (res) {
    const products = []
    for (const order of res) {
      let prods = order.products
      prods = prods.map(el=>{
        el.orderStatus = order.payment_status
        return el
      })
      products.push(...prods)
    }
    yield put({
      type: 'userdata/SET_STATE',
      payload: {
        orders: products,
      },
    })
  } else {
    notification.error({
      message: 'Error',
      description: 'Error occured while getting your orders',
    })
  }

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* GET_ORDERS_FOR_ADMIN() {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const res = yield call(UserApi.getAdminOrders)
  const products = []
  for (const order of res) {
    products.push(...order.products)
  }
  console.log(products, ' admin orders')

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      adminOrders: products,
    },
  })

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* CREATE_ORDER({ payload: { id } }) {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const res = yield call(UserApi.createOrder, id)
  console.log(res, 'saga')

  yield put({
    type: 'userdate/GET_MY_ORDERS',
  })

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* GET_PROMOTIONS() {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const promotions = yield call(UserApi.getPromotions)
  console.log(promotions, ' promos')

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      promos: promotions,
    },
  })



  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: false,
    },
  })
}


export function* CREATE_PROMOTION({payload: {price, description}}){
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const res = yield call(UserApi.createPromo, {price,description})


  yield put({
    type: 'userdata/GET_PROMOTIONS'
  })

  // yield put({
  //   type: 'userdata/SET_STATE',
  //   payload: {
  //     loading: false,
  //   },
  // })
}

export function* EDIT_PROMOTION({payload: {price, description, id}}) {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const res = yield call(UserApi.editPromo, {price,description, id})

  console.log(res)

  yield put({
    type: 'userdata/GET_PROMOTIONS'
  })
}

export function* GET_MY_REVIEWS() {
  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const res = yield call(UserApi.getReviews)
  if (res) {
    yield put({
      type: 'userdata/SET_STATE',
      payload: {
        reviews: res,
      },
    })
  } else {
    notification.error({
      message: 'Error',
      description: 'Error occured while getting your Reviews',
    })
  }

  yield put({
    type: 'userdata/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_PROFILE, GET_PROFILE),
    takeEvery(actions.EDIT_PROFILE, EDIT_PROFILE),
    takeEvery(actions.GET_MY_ORDERS, GET_MY_ORDERS),
    takeEvery(actions.GET_MY_REVIEWS, GET_MY_REVIEWS),
    takeEvery(actions.GET_ORDERS_FOR_ADMIN, GET_ORDERS_FOR_ADMIN),
    takeEvery(actions.CREATE_ORDER, CREATE_ORDER),
    takeEvery(actions.GET_PROMOTIONS, GET_PROMOTIONS),
    takeEvery(actions.CREATE_PROMOTION, CREATE_PROMOTION),
    takeEvery(actions.EDIT_PROMOTION, EDIT_PROMOTION)
  ])
}
